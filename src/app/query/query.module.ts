import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileComponent } from "./profile/profile.component";
import { QueryRoutingModule } from "./query-routing.module";

@NgModule({
  declarations: [
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    QueryRoutingModule,
  ]
})
export class QueryModule { }
