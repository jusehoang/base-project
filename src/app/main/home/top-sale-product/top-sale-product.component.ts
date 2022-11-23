import { Component, Injector, OnInit } from '@angular/core';
import { Product } from 'src/app/@core/models/product.model';
import { SimpleBaseComponent } from '../../../@core/base/simple.base.component'

@Component({
  selector: 'app-top-sale-product',
  templateUrl: './top-sale-product.component.html',
  styleUrls: ['./top-sale-product.component.scss']
})
export class TopSaleProductComponent extends SimpleBaseComponent implements OnInit {
  productSell: Product[] = [
    {
      id: 'adskadh',
      name: 'Bơ vỏ sần',
      isSale: true,
      cost: 45000,
      costSale: 40000,
      image: 'https://bizweb.dktcdn.net/thumb/large/100/053/074/products/bo.jpg?v=1457618883520',
      percentSale: 12
    },
    {
      id: 'adskadhsdfs',
      name: 'Chuối tiêu',
      isSale: true,
      cost: 30000,
      costSale: 25000,
      image: 'https://bizweb.dktcdn.net/thumb/large/100/053/074/products/chuoi.jpg?v=1457542797037',
      percentSale: 17
    },
    {
      id: 'adskadhasdfs',
      name: 'Nho không hạt',
      isSale: true,
      cost: 95000,
      costSale: 59000,
      image: 'https://bizweb.dktcdn.net/thumb/large/100/053/074/products/nho.jpg?v=1457542270730',
      percentSale: 38
    },
  ]
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

}
