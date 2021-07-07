import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { ClientinformationComponent } from './clientinformation/clientinformation.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'home', component: FrontpageComponent },
  { path: 'shoppingcart', component: ShoppingcartComponent },
  { path: 'admin', component: AdminPortalComponent },
  { path: 'information', component: ClientinformationComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
