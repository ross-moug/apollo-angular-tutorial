import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReadFragmentComponent } from "./read-fragment/read-fragment.component";
import { ReadQueryComponent } from "./read-query/read-query.component";
import { WriteFragmentComponent } from "./write-fragment/write-fragment.component";
import { WriteQueryComponent } from "./write-query/write-query.component";

const routes: Routes = [
  {
    path: "read-query",
    component: ReadQueryComponent
  },
  {
    path: "read-fragment",
    component: ReadFragmentComponent
  },
  {
    path: "write-query",
    component: WriteQueryComponent
  },
  {
    path: "write-fragment",
    component: WriteFragmentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CacheRoutingModule { }
