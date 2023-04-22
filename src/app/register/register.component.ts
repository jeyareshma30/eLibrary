import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { ELibraryService } from '../e-library.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   
  signupUsers:any[]=[];
  signupObj:any={
    firstName:'',
    lastName:'',
    email:'',
    password:''
  };
  constructor(){}
  ngOnInit(): void {
    const localData=localStorage.getItem('signUpUsers');
    if(localData != null){
      this.signupUsers=JSON.parse(localData);
    }
  }
  onSignUp(){
this.signupUsers.push(this.signupObj);
localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
 
this.signupObj={
  firstName:'',
    lastName:'',
    email:'',
    password:''
};}
onSubmit(register: any)
{

}
}
  

