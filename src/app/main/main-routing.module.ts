import { DetailComponent } from './detail/detail.component';
import { SearchComponent } from './search/search.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MainComponent } from "./main.component";
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'products/:category',
        component: SearchComponent
      },
      {
        path: 'detail',
        component: DetailComponent
      },
      {
        path: 'cart',
        component: CartComponent,
        data: {
          require: ['hello']
        }
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
