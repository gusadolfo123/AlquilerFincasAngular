import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Result } from '../models/Result.interface';

@Injectable({
  providedIn: 'root',
})
export class FarmsService {
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private client: HttpClient) {}

  getFarms() {
    const urlApi = `http://localhost:4545/api/v1/farms`;
    return this.client.get<Result>(urlApi, { headers: this.headers });
  }

  getFarmsPerPage(id: number) {
    const urlApi = `http://localhost:4545/api/v1/farms?farmsPage=6&currentPage=${id}`;
    return this.client.get<Result>(urlApi, { headers: this.headers });
  }
}
