import { NgModule } from "@angular/core";
import { NzButtonModule } from 'ng-zorro-antd/button';

const MODULES = [
  NzButtonModule
]

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class ThemeModule {}
