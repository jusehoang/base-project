import { Component, Injector, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { each, reject } from "lodash";
import { Observable, Subscription } from "rxjs";
import { MessageService } from "src/app/@service/message.service";

@Component({
  template: ''
})
export class SimpleBaseComponent implements OnDestroy {
  private subscriptions: Subscription[] = [];
  protected activatedRoute: ActivatedRoute;
  protected messageService: MessageService;
  constructor(protected injector: Injector) {
    this.activatedRoute = this.injector.get(ActivatedRoute);
    this.messageService = this.injector.get(MessageService);
  }

  rxSubscribe<T>(observable: Observable<T>, next: (value: T) => void, error?: (err: any) => void, complete?: () => void): Subscription {
    const subscription = observable.subscribe({
      next,
      error,
      complete
    });
    this.subscriptions.push(subscription);
    return subscription;
  }

  rxUnSubscribe(subscription: Subscription) {
    this.subscriptions = reject(this.subscriptions, (s: Subscription) => s === subscription);
    subscription.unsubscribe();
  }

  rxUnSubscribeAll() {
    each(this.subscriptions, (subscription: Subscription) => {
      subscription.unsubscribe();
    })
    this.subscriptions = [];
  }

  ngOnDestroy(): void {
    this.rxUnSubscribeAll();
  }


}
