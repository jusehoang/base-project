import { SimpleBaseComponent } from './../../@core/base/simple.base.component';
import { Component, Injector, OnInit } from '@angular/core';
import { Product } from 'src/app/@core/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

}
