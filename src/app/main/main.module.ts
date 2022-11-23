import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "./main.component";
import { HomeComponent } from './home/home.component';
import { ThemeModule } from "../@themes/component/theme.module";
import { TopSaleProductComponent } from './home/top-sale-product/top-sale-product.component';
import { PercentPipe } from "../@core/pipes/percent.pipe";
import { MenuLeftComponent } from "./home/menu-left/menu-left.component";
import { MenuRightComponent } from "./home/menu-right/menu-right.component";
import { ListProductComponent } from "./home/list-product/list-product.component";
import { CurrencyPipe } from "../@core/pipes/currency.pipe";

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    TopSaleProductComponent,
    PercentPipe,
    MenuLeftComponent,
    MenuRightComponent,
    ListProductComponent,
    CurrencyPipe
  ],
  imports: [
    MainRoutingModule,
    CommonModule,
    ThemeModule
  ]
})
export class MainModule {}
