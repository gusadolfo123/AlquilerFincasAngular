import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Result } from '../models/Result.interface';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private httpClient: HttpClient) {}

  getCompany() {
    const urlApi = `http://localhost:4545/api/v1/companies`;
    return this.httpClient.get<Result>(urlApi, { headers: this.headers });
  }
}
