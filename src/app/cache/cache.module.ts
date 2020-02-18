import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CacheRoutingModule } from "./cache-routing.module";
import { ReadQueryComponent } from "./read-query/read-query.component";
import { ReadFragmentComponent } from "./read-fragment/read-fragment.component";
import { WriteFragmentComponent } from './write-fragment/write-fragment.component';
import { WriteQueryComponent } from './write-query/write-query.component';

@NgModule({
  declarations: [
    ReadQueryComponent,
    ReadFragmentComponent,
    WriteFragmentComponent,
    WriteQueryComponent,
  ],
  imports: [
    CommonModule,
    CacheRoutingModule,
  ],
})
export class CacheModule {
}
