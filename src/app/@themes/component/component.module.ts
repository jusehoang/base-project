import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgxSpinnerModule } from "ngx-spinner";
import { HeaderComponent } from "./header/header.component";
import { LoadingComponent } from "./loading/loading.component";

interface NgxSpinnerConfig {
  type?: string;
}

const COMPONENTS = [
  LoadingComponent,
  HeaderComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    NgxSpinnerModule.forRoot({type: 'ball-clip-rotate'}),
    RouterModule
  ]
})
export class ComponentModule {}
