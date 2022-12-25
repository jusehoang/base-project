import { NgModule } from "@angular/core";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzSliderModule } from 'ng-zorro-antd/slider';


const MODULES = [
  NzButtonModule,
  NzGridModule,
  NzMessageModule,
  NzModalModule,
  NzIconModule,
  NzInputModule,
  NzCarouselModule,
  NzBreadCrumbModule,
  NzSliderModule
]

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class ThemeModule {}
