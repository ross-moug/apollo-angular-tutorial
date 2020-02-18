import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

@Component({
  templateUrl: "./write-fragment.component.html",
})
export class WriteFragmentComponent implements OnInit {
  todo: { todo };

  constructor(private apollo: Apollo) {
  }

  ngOnInit() {
    this.apollo.getClient().writeFragment({
      id: "5",
      fragment: gql`
          fragment myTodo on Todo {
              id
              text
              completed
          }
      `,
      data: {
        id: "5",
        text: "Start using Apollo Client.",
        completed: true,
      }
    });

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
