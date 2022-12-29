import { FormsModule } from '@angular/forms';
import { DatePipe } from './../@core/pipes/date.pipe';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "./main.component";
import { HomeComponent } from './home/home.component';
import { ThemeModule } from "../@themes/component/theme.module";
import { PercentPipe } from "../@core/pipes/percent.pipe";
import { CurrencyPipe } from "../@core/pipes/currency.pipe";
import { BannerComponent } from './home/banner/banner.component';
import { SwiperModule } from "swiper/angular";
import { ProductsComponent } from './home/products/products.component';
import { ProductCarouselComponent } from './home/product-carousel/product-carousel.component';
import { NewBlogComponent } from './home/new-blog/new-blog.component';
import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    PercentPipe,
    CurrencyPipe,
    BannerComponent,
    ProductsComponent,
    ProductCarouselComponent,
    NewBlogComponent,
    DatePipe,
    SearchComponent,
    DetailComponent
  ],
  imports: [
    MainRoutingModule,
    CommonModule,
    ThemeModule,
    SwiperModule,
    FormsModule
  ]
})
export class MainModule {}
