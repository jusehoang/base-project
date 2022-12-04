import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  totalPrice = 0;
  totalItem = 0;
  showLoading = true;
  constructor() { }

  ngOnInit(): void {
  }

}
