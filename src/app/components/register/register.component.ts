import { Component, OnInit } from '@angular/core';
import { UserForRegister } from 'src/app/models/userForRegister';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
path = "https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20190530011359.png?api_key=DEMO_KEY"
  constructor(private auth:AuthService) { }

  userForRegister:UserForRegister={
    email:"",
    name:"",
    password:"",
    username:"",
  }
  passwordConfirm:string=""

  ngOnInit(): void {
  }

  register(user:UserForRegister){
   // alert(`${user.email}\n${user.name}\n${user.password}\n${user.username}`)
  this.auth.register(this.userForRegister);  
  }

}
