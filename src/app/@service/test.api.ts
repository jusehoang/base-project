import { HttpService } from './http.service';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class TestApi {
  constructor(
    private readonly httpService: HttpService
  ) {}

  getAllProducts() {
    return this.httpService.get('https://dummyjson.com/products');
  }
}
