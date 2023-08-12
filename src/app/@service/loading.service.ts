import { BehaviorSubject } from 'rxjs';
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private count$ = new BehaviorSubject(0);
  private count = 0;
  constructor() {
  }

  getObservable() {
    return this.count$.asObservable();
  }

  increase() {
    this.count$.next(++this.count);
  }

  decrease() {
    this.count$.next(--this.count);
  }
}
