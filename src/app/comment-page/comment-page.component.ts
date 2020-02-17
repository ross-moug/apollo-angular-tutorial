import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

const submitComment = gql`
    mutation submitComment($repoFullName: String!, $commentContent: String!) {
        submitComment(repoFullName: $repoFullName, commentContent: $commentContent) {
            postedBy {
                login
                html_url
            }
            createdAt
            content
        }
    }
`;

@Component({
  templateUrl: "./comment-page.component.html",
})
export class CommentPageComponent implements OnInit {
  currentUser: any = {};

  constructor(private apollo: Apollo) {
  }

  ngOnInit(): void {
    this.submit({
      repoFullName: "test",
      commentContent: "this is a comment",
    });
  }

  private submit({ repoFullName, commentContent }) {
    this.apollo.mutate({
      mutation: submitComment,
      variables: { repoFullName, commentContent },
      optimisticResponse: {
        __typename: "Mutation",
        submitComment: {
          __typename: "Comment",
          postedBy: this.currentUser,
          createdAt: new Date(),
          content: commentContent,
        },
      },
    }).subscribe();
  }
}
