import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExchangeRatesComponent } from "./exchange-rates/exchange-rates.component";

const routes: Routes = [
  {
    path: "basic",
    component: ExchangeRatesComponent
  },
  {
    path: "query",
    loadChildren: () => import("./query/query.module").then(m => m.QueryModule),
  },
  {
    path: "mutation",
    loadChildren: () => import("./mutation/mutation.module").then(m => m.MutationModule),
  },
  {
    path: "services",
    loadChildren: () => import("./graphql-services/graphql-services.module").then(m => m.GraphqlServicesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
