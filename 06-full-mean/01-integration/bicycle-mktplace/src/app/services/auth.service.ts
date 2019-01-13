import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models';
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly base = '/api/auth';

  constructor(
    private readonly http: HttpClient,
    private readonly cookieService: CookieService
  ) { }

  login(user: User): Observable<User> {
    return this.http.post<User>(`${this.base}/login`, user);
  }
  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.base}/register`, user);
  }
  logout(): Observable<boolean> {
    return this.http.delete<boolean>(`${this.base}/logout`);
  }
  isAuthed(): boolean {
    const id = this.cookieService.get('userID');
    const expired = parseInt(this.cookieService.get('expiration'), 10);
    const session = this.cookieService.get('session');
    return id && expired && session && expired > Date.now();
  }
}
