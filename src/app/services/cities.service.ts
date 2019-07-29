import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Result } from '../models/Result.interface';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private httpClient: HttpClient) {}

  getCities() {
    const urlApi = `http://localhost:4545/api/v1/cities`;
    return this.httpClient.get<Result>(urlApi, { headers: this.headers });
  }
}
