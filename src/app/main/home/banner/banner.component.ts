import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import SwiperCore, { Autoplay, Navigation, Virtual } from 'swiper';

SwiperCore.use([Navigation, Virtual])

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BannerComponent implements OnInit {
  @ViewChild(NzCarouselComponent, { static: false }) myCarousel!: NzCarouselComponent;
  constructor() { }

  ngOnInit(): void {
  }

  goPrevSlide() {
    this.myCarousel.pre();
  }

  goNextSlide() {
    this.myCarousel.next();
  }

}
