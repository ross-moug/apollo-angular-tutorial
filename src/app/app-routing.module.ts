import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExchangeRatesComponent } from "./exchange-rates/exchange-rates.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  {
    path: "basic",
    component: ExchangeRatesComponent
  },
  {
    path: "queries",
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
