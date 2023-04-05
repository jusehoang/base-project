import { BehaviorSubject } from 'rxjs';
import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";

enum ActionLoading {
  SHOW = 'show',
  STOP = 'stop'
}

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loading$ = new BehaviorSubject<string>('');
  private count$ = new BehaviorSubject(0);
  private count = 0;
  constructor(private spinner: NgxSpinnerService) {
    this.loading$.subscribe((result) => {
      switch(result) {
        case ActionLoading.SHOW:
          this.spinner.show();
          break;
        case ActionLoading.STOP:
          this.spinner.hide();
      }
    });
    this.count$.subscribe((data) => {
      if (data === 0) {
        this.loading$.next(ActionLoading.STOP);
      };
      if (data > 0) {
        this.loading$.next(ActionLoading.SHOW);
      };
    });
  }

  increase() {
    this.count++;
    this.count$.next(this.count);
  }

  decrease() {
    this.count--;
    this.count$.next(this.count);
  }
}
