import { NgModule } from "@angular/core";
import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";
import { HttpLinkModule, HttpLink, HttpLinkHandler } from "apollo-angular-link-http";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { ApolloClientOptions } from "apollo-client";
import { ApolloLink, from } from "apollo-link";
import { onError } from "apollo-link-error";
import { ServerError, ServerParseError } from "apollo-link-http-common";

const uri = "https://o5x5jzoo7z.sse.codesandbox.io/graphql"; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<NormalizedCacheObject> {
  const http: HttpLinkHandler = httpLink.create({ uri });

  const authMiddleware: ApolloLink = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers }) => {
      if (headers) {
        return {
          headers: headers.append("Authorization", localStorage.getItem("token") || null),
        };
      }
    });

    return forward(operation);
  });

  const otherMiddleware: ApolloLink = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers }) => {
      if (headers) {
        return {
          headers: headers.append("recent-activity", localStorage.getItem("lastOnlineTime") || null)
        };
      }
    });

    return forward(operation);
  });

  const logoutLink: ApolloLink = onError(({ networkError }) => {
    if (Object.getOwnPropertyDescriptor(networkError, "statusCode")
      && (networkError as ServerError | ServerParseError).statusCode === 401) {
      console.log("User logged-out!");
      // Handle log-out action
    }
  });

  return {
    link: logoutLink.concat(from([authMiddleware, otherMiddleware, http])),
    cache: new InMemoryCache({
      dataIdFromObject: object => {
        switch (object.__typename) {
          case "post": return object.__typename;
          default: return object.id;
        }
      }
    }),
  };
}

@NgModule({
  exports: [
    ApolloModule,
    HttpLinkModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {
}
