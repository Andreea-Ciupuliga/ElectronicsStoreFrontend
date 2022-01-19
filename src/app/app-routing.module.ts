import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignUpComponent} from "./pages/sign-up/sign-up.component";
import {HomeComponent} from "./pages/home/home.component";
import {ProductDetailsComponent} from "./pages/product-details/product-details.component";
import {AdminPageComponent} from "./pages/admin-page/admin-page.component";
import {CategoriesComponent} from "./pages/categories/categories.component";
import {CreateOrderComponent} from "./pages/create-order/create-order.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'sign-up',
    component: SignUpComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'productDetails/:id',
    component: ProductDetailsComponent
  },
  {
    path:'admin-page',
    component: AdminPageComponent
  },
  {
    path:'productsFromCategory/:id',
    component: CategoriesComponent,
  },
  {
    path:'createOrder/:id',
    component: CreateOrderComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
