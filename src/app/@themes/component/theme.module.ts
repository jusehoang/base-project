import { NgModule } from "@angular/core";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

// const COMPONENTS = [
//   // SimpleBaseComponent
// ]

const MODULES = [
  NzButtonModule,
  NzCarouselModule,
  NzGridModule,
  NzMessageModule,
  NzModalModule,
  NzPaginationModule
]

@NgModule({
  // declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...MODULES]
})
export class ThemeModule {}
