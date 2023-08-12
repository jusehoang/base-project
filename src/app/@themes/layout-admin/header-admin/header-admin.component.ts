import {Component, Injector, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd} from "@angular/router";
import {SimpleBaseComponent} from "../../../@core/base/simple.base.component";
import {Navigation} from "swiper";

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss']
})
export class HeaderAdminComponent extends SimpleBaseComponent implements OnInit {
  pageName = '';
  constructor(
    injector: Injector
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.rxSubscribe(this.router.events, (events) => {
      if (events instanceof NavigationEnd) {
        // console.log(this.router);
        // console.log(this.activatedRoute);
        let child = this.activatedRoute.firstChild;
        while (child) {
          if (child.firstChild) {
            child = child.firstChild;
          } else if (child.snapshot.data && child.snapshot.data['pageName']) {
            this.pageName = child.snapshot.data['pageName'];
            return child.snapshot.data['pageName'];
          } else {
            return null;
          }
        }
        return null;
      }
    })
  }

}
