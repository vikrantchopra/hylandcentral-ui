import { Injectable } from '@angular/core';
import { Employee } from './employee';

import { HttpClient } from "@angular/common/http";
import { map, filter, scan, catchError, tap } from 'rxjs/operators';
import { Observable, pipe } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = "http://localhost:8080/hylandcentral/api/employees/all";

  constructor(private http: HttpClient) { }

  findAll() : Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl)
    .pipe(
      tap(employees => console.log(`fetched employees`)),
      catchError((error:any) => Observable.throw(error.json().error || 'Server error'))
    );
  }
}
