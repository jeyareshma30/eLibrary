import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthRouteGuardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let userRole=localStorage.getItem('userRole');
if(userRole=='admin')
{
  return true;
}
else{
  window.alert("You don't have permission to view this page");
  return false;
}
  }
  
}
