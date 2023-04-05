import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { en_US, NzI18nService, vi_VN } from 'ng-zorro-antd/i18n';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  language$ = new BehaviorSubject<string>('vi');
  constructor(private readonly translate: TranslateService, private readonly nzi18nService: NzI18nService) {
  }

  get currentLanguage() {
    return this.language$.asObservable();
  }

  refresh() {
    this.changeLanguage(this.language$.value);
  }

  changeLanguage(langCode: string) {
    switch(langCode) {
      case 'en':
        this.nzi18nService.setLocale(en_US);
        break;
      default:
        this.nzi18nService.setLocale(vi_VN);
        break;
    }

    this.translate.use(langCode);
    this.language$.next(langCode);
  }
}
