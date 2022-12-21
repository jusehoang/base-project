import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  breadcumbs: Breadcrumb[] = [
    {
      content: 'Trang chủ',
      routerLink: '/'
    },
    {
      content: 'Sale',
      routerLink: '/products/sale'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

export interface Breadcrumb {
  content: string;
  routerLink?: string;
}
