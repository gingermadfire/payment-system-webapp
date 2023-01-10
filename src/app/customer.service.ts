import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Customer} from "./customer";


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  private customersUrl = 'http://localhost:8080/api/v1/customers';

  getCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.customersUrl)
      .pipe(
        tap(customers => console.log(customers))
      )
  }
}
