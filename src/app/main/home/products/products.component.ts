import { SimpleBaseComponent } from './../../../@core/base/simple.base.component';
import { Component, OnInit, Injector } from '@angular/core';
import { Product } from 'src/app/@core/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends SimpleBaseComponent implements OnInit {
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
  constructor(
    injector: Injector,
  ) {
    super(injector);
  }

  ngOnInit(): void {}

}
