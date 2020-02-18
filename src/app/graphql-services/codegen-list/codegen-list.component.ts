import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { PostsGQL } from "src/generated/graphql";

@Component({
  templateUrl: "./codegen-list.component.html",
})
export class CodegenListComponent implements OnInit {
  posts: Observable<any>;

  constructor(private postsGqlService: PostsGQL) { }

  ngOnInit() {
    this.posts = this.postsGqlService.watch({
      first: 10,
    }, {
      fetchPolicy: "network-only",
    })
      .valueChanges
      .pipe(map(result => result.data.posts));
  }
}
