import { Injectable } from "@angular/core";
import { Mutation } from "apollo-angular";
import gql from "graphql-tag";

@Injectable({
  providedIn: "root"
})
export class UpvotePostGQL extends Mutation {
  document = gql`
      mutation upvotePosts($postId: Int!) {
          upvotePost(postId: $postId) {
              id
              votes
          }
      }
  `;
}
