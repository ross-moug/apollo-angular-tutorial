import { Injectable } from "@angular/core";
import { Query } from "apollo-angular";
import gql from "graphql-tag";

@Injectable({
  providedIn: "root"
})
export class AllPostsGQL extends Query<{
  posts: any[],
}> {
  document = gql`
      query allPosts {
          posts {
              id
              title
              votes
              author {
                  id
                  firstName
                  lastName
              }
          }
      }
  `;
}
