import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private http: HttpClient) {}

  getAllRecipies() {
    return this.http.get('https://dummyjson.com/recipes'); //no need to convert or add async await its already specified by httclient
  }
}
