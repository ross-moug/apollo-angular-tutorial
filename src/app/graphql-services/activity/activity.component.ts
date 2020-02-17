import { Component } from "@angular/core";
import { NewPostGQL } from "../new-post-gql.service";

@Component({
  templateUrl: "./activity.component.html",
})
export class ActivityComponent {
  lastPost: any;

  constructor(newPostGQL: NewPostGQL) {
    this.lastPost = newPostGQL.subscribe();
  }
}
