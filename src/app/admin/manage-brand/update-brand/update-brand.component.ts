import {Component, Injector, OnInit} from '@angular/core';
import {SimpleBaseComponent} from "../../../@core/base/simple.base.component";

@Component({
  selector: 'app-update-brand',
  templateUrl: './update-brand.component.html',
  styleUrls: ['./update-brand.component.scss']
})
export class UpdateBrandComponent extends SimpleBaseComponent implements OnInit {
  form = this.formBuilder.group({
    name: ['']
  })
  constructor(
    injector: Injector
  ) {
    super(injector);
  }

  ngOnInit(): void {
  }

}
