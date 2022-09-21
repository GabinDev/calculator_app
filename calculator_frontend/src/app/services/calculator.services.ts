import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/app/utils/constant';
import { Figure, Unity } from '../utils/types';



@Injectable({
  providedIn: 'root'
})
export class CalculatorSevice {
  constructor(private http: HttpClient) { }

  getFigures(): Observable<Figure[]> {
    return this.http.get<Figure[]>(`${BASE_URL}/figures`);
  }

  getUnities(): Observable<Unity[]> {
    return this.http.get<Unity[]>(`${BASE_URL}/unities`)
  }

}