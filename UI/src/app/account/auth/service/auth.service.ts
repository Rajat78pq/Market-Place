import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Auth from '../model/auth.model';
import Token from '../model/token.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  login(credentials: Auth): Observable<Token> {
    return this.http.post<Token>(this.url + '/login', credentials);
  }
}
