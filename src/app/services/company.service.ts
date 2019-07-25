import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Result } from '../models/Result.interface';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDNhMGQwOTNmMjA2YzA1NzhhMGQ5OWYiLCJpYXQiOjE1NjQwODU1MTN9.WYnB5M7aQP7Ee4is-eCf8n2HOH2Mt_0UadKjvHqvQVA',
  });

  constructor(private httpClient: HttpClient) {}

  getCompany() {
    const urlApi = `http://localhost:4545/api/v1/companies`;
    return this.httpClient.get<Result>(urlApi, { headers: this.headers });
  }
}
