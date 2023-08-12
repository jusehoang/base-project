import { Component, Injector, OnInit } from '@angular/core';
import { SimpleBaseComponent } from '../@core/base/simple.base.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent extends SimpleBaseComponent implements OnInit {

  constructor(
    injector: Injector
  ) {
    super(injector);
  }

  ngOnInit(): void {
  }

}
