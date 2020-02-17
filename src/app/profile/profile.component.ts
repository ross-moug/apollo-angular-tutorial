import { Component, OnDestroy, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { Subscription } from "rxjs";

const CurrentUserForProfile = gql`
  query CurrentUserForProfile($avatarSize: Int!) {
    currentUser {
      login
      avatar_url(avatarSize: $avatarSize)
    }
  }
`;

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
})
export class ProfileComponent implements OnInit, OnDestroy {
  loading: boolean;
  currentUser: any;

  private querySubscription: Subscription;

  constructor(private apollo: Apollo) {
  }

  ngOnInit() {
    this.querySubscription = this.apollo.watchQuery<any>({
      query: CurrentUserForProfile,
      variables: {
        avatarSize: 100,
      },
    })
      .valueChanges
      .subscribe(({ data, loading }) => {
        this.loading = loading;
        this.currentUser = data.currentUser;
      });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
