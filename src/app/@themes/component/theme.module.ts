import { NgModule } from "@angular/core";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

const MODULES = [
  NzButtonModule,
  NzCarouselModule,
  NzGridModule,
  NzMessageModule,
  NzModalModule,
  NzPaginationModule,
  NzFormModule,
  NzInputModule
]

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class ThemeModule {}
