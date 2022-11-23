import { NgModule } from "@angular/core";
import { ComponentModule } from "../@themes/component/component.module";
import { PageRoutingModule } from "./page-routing.module";
import { PageComponent } from "./page.component";

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    PageRoutingModule,
    ComponentModule
  ],
})
export class PageModule {}
