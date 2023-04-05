import { Product } from 'src/app/@core/models/product.model';
import { Injector } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SimpleBaseComponent } from 'src/app/@core/base/simple.base.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent extends SimpleBaseComponent implements OnInit {
  products: Product[] = []
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.rxSubscribe(this.activatedRoute.data, (data) => {
      console.log(data);
    })
  }

}
