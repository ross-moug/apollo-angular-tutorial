import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AllPostsGQL } from "../all-posts-gql.service";

@Component({
  templateUrl: "./list.component.html",
})
export class ListComponent implements OnInit {
  posts: Observable<any>;

  constructor(private allPostsGqlService: AllPostsGQL) { }

  ngOnInit() {
    this.posts = this.allPostsGqlService.watch({
      first: 10,
    }, {
      fetchPolicy: "network-only",
    })
      .valueChanges
      .pipe(map(result => result.data.posts));
  }
}
