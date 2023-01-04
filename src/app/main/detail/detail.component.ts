import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/@core/models/product.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  product: Product = {
    id: '5',
    name: 'TISSOT LE LOCLE T006 AUTO WATCH 39MM',
    price: 1590000,
    image: 'https://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/15-480x480.jpg',
    isSale: true,
    priceSale: 9540000,
    percentSale: 40
  }
  constructor() { }

  ngOnInit(): void {
  }

}
