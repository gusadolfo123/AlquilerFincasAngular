import { Result } from '../models/Result.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private client: HttpClient) {}

  getServices() {
    const urlApi = `http://localhost:4545/api/v1/services`;
    return this.client.get<Result>(urlApi, { headers: this.headers });
  }
}
