import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  {
    path: "basic",
    component: ProfileComponent,
  },
  {
    path: "data-extract",
    loadChildren: () => import("./data-extract/data-extract.module").then(m => m.DataExtractModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueryRoutingModule { }
