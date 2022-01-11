import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignUpComponent} from "./pages/sign-up/sign-up.component";
import {HomeComponent} from "./pages/home/home.component";
import {ProductDetailsComponent} from "./pages/product-details/product-details.component";

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
