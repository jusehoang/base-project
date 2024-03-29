import { NgModule } from "@angular/core";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzRateModule } from 'ng-zorro-antd/rate';


const MODULES = [
  NzButtonModule,
  NzGridModule,
  NzMessageModule,
  NzModalModule,
  NzIconModule,
  NzInputModule,
  NzCarouselModule,
  NzBreadCrumbModule,
  NzSliderModule,
  NzToolTipModule,
  NzTabsModule,
  NzRateModule
]

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class ThemeModule {}
