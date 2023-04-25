import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { LoginComponent } from './login/login.component';
import { PriceCardComponent } from './price-card/price-card.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { DeleteComponent } from './delete/delete.component';
import { RulesComponent } from './rules/rules.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { AuthRouteGuardGuard } from './auth-route-guard.guard';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'signup',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'search',component:SearchComponent},
  {path:'price',component:PriceCardComponent},
  {path:'addBook',component:AddBookComponent,canActivate:[AuthRouteGuardGuard]},
  {path:'edit',component:EditComponent,canActivate:[AuthRouteGuardGuard]},
  {path:'edit/:id',component:EditBookComponent},
  {path:'delete',component:DeleteComponent,canActivate:[AuthRouteGuardGuard]},
  {path:'rules',component:RulesComponent},
  {path:'',redirectTo:'HomeComponent',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
