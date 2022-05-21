import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserForRegister } from '../models/userForRegister';
import { AuthResponse } from '../models/authResponse';
import { UserForLogin } from '../models/userForLogin';
import { WindowService } from './window.service';
import { ToastService } from 'angular-toastify';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  path = 'https://localhost:44343/api/auth/';
  constructor(
    private http: HttpClient,
    private wndService: WindowService,
    private toastService: ToastService
  ) {}

  isLoggedIn(): boolean {
    return localStorage.getItem('token') == null ? false : true;
  }
  loggedIn = new EventEmitter<boolean>();
  register(user: UserForRegister) {
    if (this.isLoggedIn() == false) {
      this.http
        .post<AuthResponse>(this.path + 'register', user)
        .subscribe((data) => {
          if (data.token) {
            this.loggedIn.emit(true);
            this.saveTokenToLocalStorage(data.token);
            this.wndService.goOrigin();
            this.toastService.success(`Aramıza hoşgeldin ${data.userName}`);
          }
        });
    }
  }

  login(user: UserForLogin) {
    let isEmail = user.usernameOrEmail.includes('@');
    if (this.isLoggedIn() == false) {
      this.http
        .post<AuthResponse>(
          isEmail ? this.path + 'login' : this.path + 'loginU',
          isEmail
            ? { password: user.password, email: user.usernameOrEmail }
            : { password: user.password, username: user.usernameOrEmail }
        )
        .subscribe((data) => {
          if (data.token) {
            this.loggedIn.emit(true);
            this.toastService.success(
              `Tekrar görüşmek ne güzel! ${data.userName}`
            );
            this.saveTokenToLocalStorage(data.token);
            this.saveUsernameToLocalStorage(data.userName!);
            this.wndService.goOrigin();
          }
        });
    }
  }

  logout() {
    this.loggedIn.emit(false);
    this.removeTokenFromLocalStorage();
    this.removeUsernameFromLocalStorage();
    this.toastService.success(`Matematik seni korusun!\nYine bekleriz.`);
    this.wndService.goOrigin();
  }

  saveTokenToLocalStorage(token: string) {
    localStorage.setItem('token', token);
  }

  saveUsernameToLocalStorage(username: string) {
    localStorage.setItem('username', username);
  }

  removeTokenFromLocalStorage() {
    localStorage.removeItem('token');
  }

  removeUsernameFromLocalStorage() {
    localStorage.removeItem('username');
  }

  getUserName(): string {
    let user = localStorage.getItem('username');
    return user ? user : '';
  }
}
