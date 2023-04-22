import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupUsers:any[]=[];
   loginObj:any={
    email:'',
    password:''
  };
   constructor( private router: Router) { }

  ngOnInit(): void {
    const localData=localStorage.getItem('signUpUsers');
    if(localData != null){
      this.signupUsers=JSON.parse(localData);
    }
  }
  
onLogin(login:NgForm){
const token= this.signupUsers.find(r=>r.email==this.loginObj.email && r.password==this.loginObj.password);
if(token)
{
  localStorage.setItem('token',token.email)
  alert('User Login Successfully');
  this.router.navigate(['/search'])
  }
  else{
    alert('Wrong credentials');
  }
}

}
