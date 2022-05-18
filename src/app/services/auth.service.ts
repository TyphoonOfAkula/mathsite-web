import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserForRegister } from '../models/userForRegister';
import { RegisterResponse } from '../models/registerResponse';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  path = "http://localhost:5000/api/auth/register"
  constructor(private http:HttpClient) { }

  register(user: UserRegister){
    this.http.post<RegisterResponse>(this.path,JSON.stringify(user)).subscribe(data=>{
      
    })
  }

  saveTokenToLocalStorage(token:string){
    localStorage.setItem("token",token);
  }
  removeTokenToLocalStorage(){
    localStorage.removeItem("token");
    
  }

}
