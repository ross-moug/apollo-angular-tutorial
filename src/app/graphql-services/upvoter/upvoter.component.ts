import { Component, Input } from "@angular/core";
import { UpvotePostGQL } from "../upvote-post-gql.service";

@Component({
  templateUrl: "./upvoter.component.html",
})
export class UpvoterComponent {
  @Input()
  postId: number = 1;

  constructor(private upvotePostGQL: UpvotePostGQL) {
  }

  upvote() {
    this.upvotePostGQL.mutate({
      postId: this.postId
    })
      .subscribe();
  }

}
