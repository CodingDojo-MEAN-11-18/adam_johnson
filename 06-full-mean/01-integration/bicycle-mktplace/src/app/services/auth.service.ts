import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models';
import { CookieService } from 'ngx-cookie';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly base = '/api/auth';
  isAuthed$ = new BehaviorSubject(this.isAuthed());

  constructor(
    private readonly http: HttpClient,
    private readonly cookieService: CookieService
  ) { }

  login(user: User): Observable<User> {
    return this.http.post<User>(`${this.base}/login`, user).pipe(tap(() => {
      this.isAuthed$.next(true);
    }));
  }
  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.base}/register`, user);
  }
  logout(): Observable<boolean> {
    return this.http.delete<boolean>(`${this.base}/logout`).pipe(tap(() => {
      this.isAuthed$.next(false);
      this.cookieService.removeAll();
    }));
  }
  isAuthed(): boolean {
    const id = this.cookieService.get('userID');
    const expired = parseInt(this.cookieService.get('expiration'), 10);
    const session = this.cookieService.get('session');
    return Boolean(id && expired && session && expired > Date.now());
  }
}
