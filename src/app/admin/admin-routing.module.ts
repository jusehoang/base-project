import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {AdminComponent} from "./admin.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'manage-product',
        loadChildren: () => import('../admin/manage-product/product.module').then(m => m.ManageProductModule),
        data: {
          pageName: ''
        }
      },
      {
        path: 'manage-brand',
        loadChildren: () => import('../admin/manage-brand/manage-brand.module').then(m => m.ManageBrandModule),
        data: {
          pageName: 'alo'
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
