import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GraphqlServicesRoutingModule } from "./graphql-services-routing.module";
import { ListComponent } from "./list/list.component";
import { UpvoterComponent } from "./upvoter/upvoter.component";
import { ActivityComponent } from "./activity/activity.component";

@NgModule({
  declarations: [
    ListComponent,
    UpvoterComponent,
    ActivityComponent],
  imports: [
    CommonModule,
    GraphqlServicesRoutingModule,
  ]
})
export class GraphqlServicesModule {
}
