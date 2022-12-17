import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PaymentComponent} from "./payment/payment.component";
import {BillerComponent} from "./biller/biller.component";
import {CustomerComponent} from "./customer/customer.component";

const routes: Routes = [
  { path: '', redirectTo: '/payments', pathMatch: 'full' },
  { path: 'payments', component: PaymentComponent },
  { path: 'billers', component: BillerComponent },
  { path: 'customers', component: CustomerComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ]

})
export class AppRoutingModule { }
