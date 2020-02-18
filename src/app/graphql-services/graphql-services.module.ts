import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CodegenListComponent } from "./codegen-list/codegen-list.component";
import { GraphqlServicesRoutingModule } from "./graphql-services-routing.module";
import { ListComponent } from "./list/list.component";
import { UpvoterComponent } from "./upvoter/upvoter.component";
import { ActivityComponent } from "./activity/activity.component";

@NgModule({
  declarations: [
    ListComponent,
    UpvoterComponent,
    ActivityComponent,
    CodegenListComponent,
  ],
  imports: [
    CommonModule,
    GraphqlServicesRoutingModule,
  ]
})
export class GraphqlServicesModule {
}
