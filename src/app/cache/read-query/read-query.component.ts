import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

const query = gql`
    query MyTodoAppQuery {
        todos {
            id
            text
            completed
        }
    }
`;

@Component({
  templateUrl: "./read-query.component.html",
})
export class ReadQueryComponent implements OnInit {
  todo: { todo };

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.getClient().writeQuery({
      query,
      data: {
        todos: [{
          id: "5",
          text: "Start using Apollo Client.",
          completed: false,
        }],
      },
    });

    this.todo = this.apollo.getClient().readQuery({
      query: gql`
          query ReadTodo($id: Int!) {
              todo(id: $id) {
                  id
                  text
                  completed
              }
          },
      `,
      variables: {
        id: 5,
      },
    });
  }
}
