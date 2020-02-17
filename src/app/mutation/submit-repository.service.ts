import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SubmitRepositoryService {
  mutation = gql`
      mutation submitRepository($repoFullName: String!) {
          submitRepository(repoFullName: $repoFullName) {
              createdAt
          }
      }`;

  constructor(private apollo: Apollo) {
  }

  submitRepository(repoFullName: string): Observable<any> {
    return this.apollo.mutate({
      mutation: this.mutation,
      variables: {
        repoFullName
      }
    });
  }
}
