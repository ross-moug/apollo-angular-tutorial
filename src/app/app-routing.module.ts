import { NewCommand } from "@angular/cli/commands/new-impl";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommentPageComponent } from "./comment-page/comment-page.component";
import { ExchangeRatesComponent } from "./exchange-rates/exchange-rates.component";
import { AsyncFeedComponent } from "./async-feed/async-feed.component";
import { NewEntryComponent } from "./new-entry/new-entry.component";
import { ProfileComponent } from "./profile/profile.component";
import { RxjsFeedComponent } from "./rxjs-feed/rxjs-feed.component";

const routes: Routes = [
  {
    path: "basic",
    component: ExchangeRatesComponent
  },
  {
    path: "queries",
    component: ProfileComponent,
  },
  {
    path: "extract-data-async-pipe",
    component: AsyncFeedComponent,
  },
  {
    path: "extract-data-rxjs",
    component: RxjsFeedComponent,
  },
  {
    path: "mutations",
    component: NewEntryComponent,
  },
  {
    path: "optimistic-response",
    component: CommentPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
