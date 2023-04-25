import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'eLibrarySystem';
  
  usrRol:string | null | undefined;
  ngOnInit():void{
    localStorage.setItem('userRole','admin')
    this.usrRol=localStorage.getItem('userRole')
  }
    
   loggedIn() {
    return localStorage.getItem('token');
   }
   onLogout()
   {
    localStorage.removeItem('token');
   }
  
}
