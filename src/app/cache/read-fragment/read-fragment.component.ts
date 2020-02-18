import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

@Component({
  templateUrl: "./read-fragment.component.html",
})
export class ReadFragmentComponent implements OnInit {
  todo: { todo };

  constructor(private apollo: Apollo) {
  }

  ngOnInit() {
    this.todo = this.apollo.getClient().readFragment({
      id: "5",
      fragment: gql`
          fragment myTodo on Todo {
              id
              text
              completed
          },
      `,
    });
  }
}
