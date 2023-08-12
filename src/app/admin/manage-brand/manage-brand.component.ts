import { Component, Injector, OnInit } from '@angular/core';
import {Brand, PageParam} from "../../@core/models/brand.model";
import { SimpleBaseComponent } from 'src/app/@core/base/simple.base.component';
import { BrandService } from 'src/app/@service/api/brand.service';

@Component({
  selector: 'app-manage-brand',
  templateUrl: './manage-brand.component.html',
  styleUrls: ['./manage-brand.component.scss']
})
export class ManageBrandComponent extends SimpleBaseComponent implements OnInit {
  brands: Brand[] = [];
  pageParams: PageParam = {
    page: 1,
    size: 15
  }
  constructor(
    injector: Injector,
    private readonly brandService: BrandService
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.rxSubscribe(this.brandService.getBrand(this.pageParams), (result) => {
      this.brands = result.items;
    })
    this.rxSubscribe(this.activatedRoute.data, (data) => {
      console.log(data);
    })
  }

  pageIndexChange(index: number) {

  }
}
