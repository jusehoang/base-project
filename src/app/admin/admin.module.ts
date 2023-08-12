import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdminRoutingModule } from "./admin-routing.module";
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AdminComponent } from "./admin.component";
import {ComponentModule} from "../@themes/component/component.module";
import {NzTableModule} from "ng-zorro-antd/table";
import { TranslateModule } from "@ngx-translate/core";
import { ManageBrandComponent } from './manage-brand/manage-brand.component';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NzLayoutModule,
    ComponentModule,
    NzTableModule,
    TranslateModule.forChild()
  ]
})
export class AdminModule {}
