import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { ClientinformationComponent } from './clientinformation/clientinformation.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegisterComponent,
    ProductsComponent,
    FrontpageComponent,
    ShoppingcartComponent,
    AdminPortalComponent,
    ClientinformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule, FormsModule, ReactiveFormsModule, ProductsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
