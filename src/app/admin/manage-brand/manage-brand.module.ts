import { NgModule } from "@angular/core";
import { ManageBrandComponent } from "./manage-brand.component";
import { CommonModule } from "@angular/common";
import { ManageBrandRoutingModule } from "./manage-brand-routing.module";
import {NzTableModule} from "ng-zorro-antd/table";
import {TranslateModule} from "@ngx-translate/core";
import { UpdateBrandComponent } from './update-brand/update-brand.component';
import {NzInputModule} from "ng-zorro-antd/input";

@NgModule({
  declarations: [
    ManageBrandComponent,
    UpdateBrandComponent
  ],
  imports: [
    CommonModule,
    ManageBrandRoutingModule,
    NzTableModule,
    TranslateModule,
    NzInputModule
  ]
})
export class ManageBrandModule {}
