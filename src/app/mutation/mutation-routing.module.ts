import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommentPageComponent } from "./comment-page/comment-page.component";
import { NewEntryComponent } from "./new-entry/new-entry.component";

const routes: Routes = [
  {
    path: "basic",
    component: NewEntryComponent
  },
  {
    path: "optimistic-response",
    component: CommentPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MutationRoutingModule { }
