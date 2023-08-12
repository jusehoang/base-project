import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ManageBrandComponent } from "./manage-brand.component";
import {UpdateBrandComponent} from "./update-brand/update-brand.component";

const routes: Routes = [
  {
    path: '',
    component: ManageBrandComponent
  },
  {
    path: 'add',
    component: UpdateBrandComponent
  },
  {
    path: 'edit',
    component: UpdateBrandComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageBrandRoutingModule {}
