import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CommentPageComponent } from "./comment-page/comment-page.component";
import { MutationRoutingModule } from "./mutation-routing.module";
import { NewEntryComponent } from "./new-entry/new-entry.component";

@NgModule({
  declarations: [
    NewEntryComponent,
    CommentPageComponent,
  ],
  imports: [
    CommonModule,
    MutationRoutingModule,
  ]
})
export class MutationModule { }
