import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Payment} from "./payment";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient: HttpClient) { }

  private paymentsUrl = 'http://localhost:8080/api/v1/payments';

  getPayments(): Observable<Payment[]> {
    return this.httpClient.get<Payment[]>(this.paymentsUrl)
      .pipe(
        tap(payments => console.log(payments))
      )
  }
}
