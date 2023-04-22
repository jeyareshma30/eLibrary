import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { LoginComponent } from './login/login.component';
import { PriceCardComponent } from './price-card/price-card.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { SaveBookComponent } from './save-book/save-book.component';
import { DeleteComponent } from './delete/delete.component';
import { HomeComponent } from './home/home.component';
import { RulesComponent } from './rules/rules.component';
import { SearchAdminComponent } from './search-admin/search-admin.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'signup',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'search',component:SearchComponent},
  {path:'price',component:PriceCardComponent},
  {path:'addBook',component:AddBookComponent},
  {path:'edit',component:EditComponent},
  {path:'edit/:id',component:EditBookComponent},
  {path:'save',component:SaveBookComponent},
  {path:'delete',component:DeleteComponent},
  {path:'rules',component:RulesComponent},
  {path:'searchAdmin',component:SearchAdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
