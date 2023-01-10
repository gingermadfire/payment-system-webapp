import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Payment} from "./payment";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient: HttpClient) { }

  private paymentsUrl = 'http://localhost:8080/api/v1/payments';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getPayments(): Observable<Payment[]> {
    return this.httpClient.get<Payment[]>(this.paymentsUrl)
      .pipe(
        tap(payments => console.log(payments))
      )
  }

  setPayment(payment: Payment) {
    this.httpClient.post<Payment>(this.paymentsUrl, payment, this.httpOptions)
      .subscribe(data =>
      console.log(data));
  }
}
