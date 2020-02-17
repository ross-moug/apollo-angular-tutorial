import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ActivityComponent } from "./activity/activity.component";
import { ListComponent } from "./list/list.component";
import { UpvoterComponent } from "./upvoter/upvoter.component";

const routes: Routes = [
  {
    path: "query",
    component: ListComponent,
  },
  {
    path: "mutation",
    component: UpvoterComponent,
  },
  {
    path: "subscription",
    component: ActivityComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphqlServicesRoutingModule { }
