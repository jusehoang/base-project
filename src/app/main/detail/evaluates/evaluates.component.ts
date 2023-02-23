import { FormBuilder } from '@angular/forms';
import { Component, Input, OnInit, Injector } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SimpleBaseComponent } from 'src/app/@core/base/simple.base.component';
import { Evaluate } from 'src/app/@core/models/evaluate.model';
import { Product } from 'src/app/@core/models/product.model';

@Component({
  selector: 'app-evaluates',
  templateUrl: './evaluates.component.html',
  styleUrls: ['./evaluates.component.scss']
})
export class EvaluatesComponent extends SimpleBaseComponent implements OnInit {
  @Input() product!: Product;
  evaluates: Evaluate[] = [];
  rate =  0;
  form!: FormGroup<{
    content: FormControl<string>;
    name: FormControl<string>;
    email: FormControl<string>;
  }>;
  constructor(injector: Injector, private readonly fb: FormBuilder) {
    super(injector);
  }

  ngOnInit() {
    this.form = this.fb.nonNullable.group({
      content: [''],
      name: [''],
      email: ['']
    })
    this.fb.record
  }

  doSubmit() {}

}
