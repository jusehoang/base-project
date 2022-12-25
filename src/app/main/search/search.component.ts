import { Category, Product } from './../../@core/models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [
    {
      content: 'Trang chủ',
      routerLink: '/'
    },
    {
      content: 'Sale',
      routerLink: '/products/sale'
    }
  ];
  categorys: Category[] = [
    {
      id: '1',
      name: 'Casio',
      routerLink: '/products/casio',
    },
    {
      id: '2',
      name: 'Citizen',
      routerLink: '/products/citizen'
    },
    {
      id: '3',
      name: 'Đồng hồ cặp đôi',
      routerLink: '/products/dong-ho-cap-doi'
    },
    {
      id: '4',
      name: 'Đông hồ nam',
      routerLink: '/products/dong-ho-nam'
    },
    {
      id: '5',
      name: 'Đồng hồ nữ',
      routerLink: '/products/dong-ho-nu'
    },
    {
      id: '6',
      name: 'ROLEX',
      routerLink: '/products/rolex'
    },
    {
      id: '7',
      name: 'Sale',
      routerLink: '/products/sale'
    },
    {
      id: '8',
      name: 'Sản phẩm Hot',
      routerLink: '/products/san-pham-hot'
    },
  ];
  products: Product[] = [
    {
      id: '1',
      name: 'OMEGA SEAMASTER AQUA TERRA WATCH 34MM',
      price: 423150000,
      image: 'https://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/29-480x480.jpg',
      isSale: false
    },
    {
      id: '2',
      name: 'FOSSIL ME3104 TOWNSMAN AUTOMATIC LEATHER WATCH 44MM',
      price: 6300000,
      image: 'https://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/product-25_large-480x480.jpg',
      isSale: true,
      priceSale: 5800000,
      percentSale: 8
    },
    {
      id: '3',
      name: 'OMEGA SEAMASTER 39MM',
      price: 238700000,
      image: 'https://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/product-23_large-480x480.jpg'
    },
    {
      id: '4',
      name: 'MICHAEL KORS LAURYN CELESTIAL PAVÉ PLUM-TONE 38MM',
      price: 7120000,
      image: 'https://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/12-480x480.jpg',
      isSale: true,
      priceSale: 819000,
      percentSale: 88
    },
    {
      id: '5',
      name: 'TISSOT LE LOCLE T006 AUTO WATCH 39MM',
      price: 1590000,
      image: 'https://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/15-480x480.jpg',
      isSale: true,
      priceSale: 9540000,
      percentSale: 40
    },
    {
      id: '6',
      name: 'CARTIER W6920071 BALLON BLEU DE CERTIER WATCH 33MM',
      price: 156980000,
      image: 'https://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/29-480x480.jpg',
    },
  ];
  productRelatives: Product[] = [
    {
      id: '1',
      name: 'OMEGA SEAMASTER AQUA TERRA WATCH 34MM',
      price: 423150000,
      image: 'https://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/29-480x480.jpg',
      isSale: false
    },
    {
      id: '2',
      name: 'FOSSIL ME3104 TOWNSMAN AUTOMATIC LEATHER WATCH 44MM',
      price: 6300000,
      image: 'https://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/product-25_large-480x480.jpg',
      isSale: true,
      priceSale: 5800000,
      percentSale: 8
    },
    {
      id: '3',
      name: 'OMEGA SEAMASTER 39MM',
      price: 238700000,
      image: 'https://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/product-23_large-480x480.jpg'
    },
    {
      id: '4',
      name: 'MICHAEL KORS LAURYN CELESTIAL PAVÉ PLUM-TONE 38MM',
      price: 7120000,
      image: 'https://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/12-480x480.jpg',
      isSale: true,
      priceSale: 819000,
      percentSale: 88
    },
    {
      id: '5',
      name: 'TISSOT LE LOCLE T006 AUTO WATCH 39MM',
      price: 1590000,
      image: 'https://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/15-480x480.jpg',
      isSale: true,
      priceSale: 9540000,
      percentSale: 40
    },
    {
      id: '6',
      name: 'CARTIER W6920071 BALLON BLEU DE CERTIER WATCH 33MM',
      price: 156980000,
      image: 'https://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/29-480x480.jpg',
    },
  ];
  searchPrice = [819000, 14000000];
  priceMin = 819000;
  priceMax = 1400000;
  constructor() { }

  ngOnInit(): void {
  }

}

export interface Breadcrumb {
  content: string;
  routerLink?: string;
}
