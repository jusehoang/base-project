import { Component, Input, OnInit } from '@angular/core';
import { Evaluate } from 'src/app/@core/models/evaluate.model';
import { Product } from 'src/app/@core/models/product.model';

@Component({
  selector: 'app-evaluates',
  templateUrl: './evaluates.component.html',
  styleUrls: ['./evaluates.component.scss']
})
export class EvaluatesComponent implements OnInit {
  @Input() product!: Product;
  evaluates: Evaluate[] = [];
  constructor() { }

  ngOnInit() {
  }

}
