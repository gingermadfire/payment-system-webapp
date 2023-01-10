import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Biller} from "./biller";

@Injectable({
  providedIn: 'root'
})
export class BillerService {

  constructor(private httpClient: HttpClient) { }

  private billersUrl = 'http://localhost:8080/api/v1/billers'

  getBillers(): Observable<Biller[]>{
    return this.httpClient.get<Biller[]>(this.billersUrl)
      .pipe(
        tap(billers=> console.log(billers))
      )
  }
}
