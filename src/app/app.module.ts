import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ExchangeRatesComponent } from "./exchange-rates/exchange-rates.component";
import { AsyncFeedComponent } from "./async-feed/async-feed.component";
import { GraphQLModule } from "./graphql.module";
import { HttpClientModule } from "@angular/common/http";
import { ProfileComponent } from "./profile/profile.component";
import { RxjsFeedComponent } from "./rxjs-feed/rxjs-feed.component";

@NgModule({
  declarations: [
    AppComponent,
    ExchangeRatesComponent,
    ProfileComponent,
    AsyncFeedComponent,
    RxjsFeedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
