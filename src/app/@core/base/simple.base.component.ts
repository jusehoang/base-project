import { TranslateService } from '@ngx-translate/core';
import { Component, Injectable, Injector, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { each, reject } from "lodash";
import { Observable, Subscription } from "rxjs";
import { MessageService } from "src/app/@service/message.service";
import { LanguageService } from 'src/app/@service/translate.service';

@Injectable({
  providedIn: "root"
})
@Component({
  template: ''
})
export class SimpleBaseComponent implements OnDestroy {
  private subscriptions: Subscription[] = [];
  protected activatedRoute: ActivatedRoute;
  protected messageService: MessageService;
  protected router: Router;
  protected translateService: TranslateService;
  protected languageService: LanguageService;
  protected currentLanguage = 'vi';
  constructor(protected injector: Injector) {
    this.activatedRoute = this.injector.get(ActivatedRoute);
    this.messageService = this.injector.get(MessageService);
    this.translateService = this.injector.get(TranslateService);
    this.languageService = this.injector.get(LanguageService);
    this.router = this.injector.get(Router);
    this.init();
  }

  init() {
    this.rxSubscribe(this.languageService.currentLanguage, (lang) => {
      this.currentLanguage = lang;
    });
    this.languageService.refresh();
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
