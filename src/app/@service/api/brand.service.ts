import { BaseResponse } from './../../@core/models/base.model';
import { Injectable } from "@angular/core";
import { HttpService } from "../http.service";
import { Brand, PageParam } from "src/app/@core/models/brand.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  constructor(private readonly httpService: HttpService) {
  }

  getBrand(params: PageParam): Observable<BaseResponse<Brand>> {
    return this.httpService.get('/brand', { params: { ...params }, ignoreAuthToken: true});
  }
}
