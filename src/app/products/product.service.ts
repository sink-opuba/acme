import { Injectable } from "@angular/core";
import { IProduct } from "./product";

import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import {tap, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: "root"
})

export class ProductService {
  private productUrl = "api/products/products.json";

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      //tap peeks at the returned observable without transforming it
      tap((data) => console.log('All data', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    //This error handling is just for demo on the app
    //for real world app, instead of logging to console
    //we may send server to some remote logging infrastructure
    let errorMessage = '';
    if(err.error instanceof ErrorEvent) {
      //A client side or network error occurred
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      //The backend returned an unsuccessful code
      //Response body may contain clues as to what went wrong
      errorMessage = `Server side response code: ${err.status}, error message is: ${err.message}`
    }
    console.error(errorMessage)
    return throwError('error');
  }
}
