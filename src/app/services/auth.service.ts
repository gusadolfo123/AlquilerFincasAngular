import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private client: HttpClient) {}

  registerUser(user: User) {
    const urlApi = `http://localhost:4545/api/v1/users/register`;
    return this.client.post(urlApi, user);
  }
}
