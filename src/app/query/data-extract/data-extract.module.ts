import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GraphQLModule } from "../../graphql.module";
import { AsyncFeedComponent } from "./async-feed/async-feed.component";
import { DataExtractRoutingModule } from "./data-extract-routing.module";
import { RxjsFeedComponent } from "./rxjs-feed/rxjs-feed.component";

@NgModule({
  declarations: [
    AsyncFeedComponent,
    RxjsFeedComponent,
  ],
  imports: [
    CommonModule,
    GraphQLModule,
    DataExtractRoutingModule,
  ]
})
export class DataExtractModule { }
