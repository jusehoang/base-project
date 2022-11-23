import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/@core/models/product.model';

@Component({
  selector: 'app-menu-right',
  templateUrl: './menu-right.component.html',
  styleUrls: ['./menu-right.component.scss']
})
export class MenuRightComponent implements OnInit {
  products: Product[] = [
    {
      id: '1',
      name: 'Cơm thịt nướng sa tế',
      image: 'https://comngon16.com/upload/product/1552195171thit-nuong.jpg',
      cost: 45000
    },
    {
      id: '1',
      name: 'Cơm thịt nướng sa tế',
      image: 'https://comngon16.com/upload/product/1552195171thit-nuong.jpg',
      cost: 45000
    },
    {
      id: '1',
      name: 'Cơm thịt nướng sa tế',
      image: 'https://comngon16.com/upload/product/1552195171thit-nuong.jpg',
      cost: 45000
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
