import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "./main.component";
import { HomeComponent } from './home/home.component';
import { ThemeModule } from "../@themes/component/theme.module";
import { PercentPipe } from "../@core/pipes/percent.pipe";
import { CurrencyPipe } from "../@core/pipes/currency.pipe";

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    PercentPipe,
    CurrencyPipe
  ],
  imports: [
    MainRoutingModule,
    CommonModule,
    ThemeModule
  ]
})
export class MainModule {}
