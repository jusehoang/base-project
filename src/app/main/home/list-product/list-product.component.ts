import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/@core/models/product.model';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  products: Product[] = [
    {
      id: '1',
      name: 'Thit nạc vai lợn TNV10',
      image: 'https://bizweb.dktcdn.net/thumb/medium/100/053/074/products/vaiheo.jpg?v=1456497783687',
      cost: 45000
    },
    {
      id: '1',
      name: 'Thit nạc vai lợn TNV10',
      image: 'https://bizweb.dktcdn.net/thumb/medium/100/053/074/products/vaiheo.jpg?v=1456497783687',
      cost: 45000
    },
    {
      id: '1',
      name: 'Thit nạc vai lợn TNV10',
      image: 'https://bizweb.dktcdn.net/thumb/medium/100/053/074/products/vaiheo.jpg?v=1456497783687',
      cost: 45000
    },
    {
      id: '1',
      name: 'Thit nạc vai lợn TNV10',
      image: 'https://bizweb.dktcdn.net/thumb/medium/100/053/074/products/vaiheo.jpg?v=1456497783687',
      cost: 45000
    },
    {
      id: '1',
      name: 'Thit nạc vai lợn TNV10',
      image: 'https://bizweb.dktcdn.net/thumb/medium/100/053/074/products/vaiheo.jpg?v=1456497783687',
      cost: 45000
    },
    {
      id: 'adskadhasdfs',
      name: 'Nho không hạt',
      isSale: true,
      cost: 95000,
      costSale: 59000,
      image: 'https://bizweb.dktcdn.net/thumb/large/100/053/074/products/nho.jpg?v=1457542270730',
      percentSale: 38
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
