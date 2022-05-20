import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserForRegister } from '../models/userForRegister';
import { AuthResponse } from '../models/authResponse';
import { UserForLogin } from '../models/userForLogin';
import { WindowService } from './window.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  path = 'https://localhost:44343/api/auth/';
  constructor(private http: HttpClient,private wndService:WindowService) {}

  isLoggedIn(): boolean {
    return localStorage.getItem('token') == null ? false : true;
  }

  register(user: UserForRegister) {
    if (this.isLoggedIn() == false) {
      this.http
        .post<AuthResponse>(this.path + 'register', user)
        .subscribe((data) => {
          if (data.token) {
            this.saveTokenToLocalStorage(data.token);
            this.wndService.goOrigin()
            alert('Kayıt olundu!');
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
            this.saveTokenToLocalStorage(data.token);
            this.wndService.goOrigin()
            alert('Giriş Yapıldı!');
          }
        });
    }
  }

  logout() {
    this.removeTokenToLocalStorage();
    this.wndService.goOrigin()
  }



  saveTokenToLocalStorage(token: string) {
    localStorage.setItem('token', token);
  }

  removeTokenToLocalStorage() {
    localStorage.removeItem('token');
  }
}
