import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ManageProductRoutingModule} from "./product-routing.module";
import { ManageProductComponent } from './manage-product/manage-product.component';
import {NzTableModule} from "ng-zorro-antd/table";

@NgModule({
  declarations: [
    ManageProductComponent
  ],
  imports: [
    CommonModule,
    ManageProductRoutingModule,
    NzTableModule
  ]
})
export class ManageProductModule {}
