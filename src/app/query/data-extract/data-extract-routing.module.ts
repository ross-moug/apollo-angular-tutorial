import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AsyncFeedComponent } from "./async-feed/async-feed.component";
import { RxjsFeedComponent } from "./rxjs-feed/rxjs-feed.component";

const routes: Routes = [
  {
    path: "async-pipe",
    component: AsyncFeedComponent,
  },
  {
    path: "rxjs",
    component: RxjsFeedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataExtractRoutingModule { }
