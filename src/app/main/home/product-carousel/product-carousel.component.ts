import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/@core/models/product.model';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent implements OnInit {
  @ViewChild(NzCarouselComponent, { static: false }) carousel!: NzCarouselComponent;
  products: Product[] = [
    {
      id: '1',
      name: 'OMEGA SEAMASTER AQUA TERRA WATCH 34MM',
      price: 423150000,
      image: 'https://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/29-480x480.jpg',
      isSale: false,
      code: '83399-1',
      categorys: [
        {
          id: '1',
          name: 'Đồng hồ cặp đôi'
        },
        {
          id: '2',
          name: 'Đồng hồ nam'
        },
        {
          id: '3',
          name: 'Sản phẩm hot'
        },
      ]
    },
    {
      id: '2',
      name: 'FOSSIL ME3104 TOWNSMAN AUTOMATIC LEATHER WATCH 44MM',
      price: 6300000,
      image: 'https://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/product-25_large-480x480.jpg',
      isSale: true,
      priceSale: 5800000,
      percentSale: 8,
      code: '83399-1',
      categorys: [
        {
          id: '1',
          name: 'Đồng hồ cặp đôi'
        },
        {
          id: '2',
          name: 'Đồng hồ nam'
        },
        {
          id: '3',
          name: 'Sản phẩm hot'
        },
      ]
    },
    {
      id: '3',
      name: 'OMEGA SEAMASTER 39MM',
      price: 238700000,
      image: 'https://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/product-23_large-480x480.jpg',
      code: '83399-1',
      categorys: [
        {
          id: '1',
          name: 'Đồng hồ cặp đôi'
        },
        {
          id: '2',
          name: 'Đồng hồ nam'
        },
        {
          id: '3',
          name: 'Sản phẩm hot'
        },
      ]
    },
    {
      id: '4',
      name: 'MICHAEL KORS LAURYN CELESTIAL PAVÉ PLUM-TONE 38MM',
      price: 7120000,
      image: 'https://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/12-480x480.jpg',
      isSale: true,
      priceSale: 819000,
      percentSale: 88,
      code: '83399-1',
      categorys: [
        {
          id: '1',
          name: 'Đồng hồ cặp đôi'
        },
        {
          id: '2',
          name: 'Đồng hồ nam'
        },
        {
          id: '3',
          name: 'Sản phẩm hot'
        },
      ]
    },
    {
      id: '5',
      name: 'TISSOT LE LOCLE T006 AUTO WATCH 39MM',
      price: 1590000,
      image: 'https://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/15-480x480.jpg',
      isSale: true,
      priceSale: 9540000,
      percentSale: 40,
      code: '83399-1',
      categorys: [
        {
          id: '1',
          name: 'Đồng hồ cặp đôi'
        },
        {
          id: '2',
          name: 'Đồng hồ nam'
        },
        {
          id: '3',
          name: 'Sản phẩm hot'
        },
      ]
    },
    {
      id: '6',
      name: 'CARTIER W6920071 BALLON BLEU DE CERTIER WATCH 33MM',
      price: 156980000,
      image: 'https://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/29-480x480.jpg',
      code: '83399-1',
      categorys: [
        {
          id: '1',
          name: 'Đồng hồ cặp đôi'
        },
        {
          id: '2',
          name: 'Đồng hồ nam'
        },
        {
          id: '3',
          name: 'Sản phẩm hot'
        },
      ]
    },
    {
      id: '7',
      name: 'BIG BANG MXM18 SANG BLEU 39',
      price: 739370000,
      image: 'https://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/21.jpg',
      code: '83399-1',
      categorys: [
        {
          id: '1',
          name: 'Đồng hồ cặp đôi'
        },
        {
          id: '2',
          name: 'Đồng hồ nam'
        },
        {
          id: '3',
          name: 'Sản phẩm hot'
        },
      ]
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  goPrevSlide() {
    this.carousel.pre();
  }

  goNextSlide() {
    this.carousel.next();
  }

}
