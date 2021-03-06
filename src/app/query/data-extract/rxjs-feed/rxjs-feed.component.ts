import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

interface FeedResponse {
  feed: {
    createdAt: Date;
    score: number;
  };
}

const FeedQuery = gql`
  query Feed {
    currentUser {
      login
    }
    feed {
      createdAt
      score
    }
  }
`;

@Component({
  templateUrl: "./rxjs-feed.component.html",
})
export class RxjsFeedComponent implements OnInit {
  data: Observable<any>;

  constructor(private apollo: Apollo) {
  }

  ngOnInit() {
    this.data = this.apollo
      .watchQuery<FeedResponse>({ query: FeedQuery })
      .valueChanges.pipe(map(({ data }) => data.feed));
  }
}
