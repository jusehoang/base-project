import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgxSpinnerModule } from "ngx-spinner";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { ThemeModule } from "./theme.module";
import { SidebarComponent } from "../layout-admin/sidebar/sidebar.component";
import {TranslateModule} from "@ngx-translate/core";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {HeaderAdminComponent} from "../layout-admin/header-admin/header-admin.component";

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  HeaderComponent,
  HeaderAdminComponent,
  SidebarComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    RouterModule,
    CommonModule,
    ThemeModule,
    TranslateModule.forChild(),
    NzMenuModule
  ]
})
export class ComponentModule {}
