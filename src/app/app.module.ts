import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { PriceCardComponent } from './price-card/price-card.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ELibraryService } from './e-library.service';
import { DeleteComponent } from './delete/delete.component';
import { RulesComponent } from './rules/rules.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component'
import { MatDialogModule } from '@angular/material/dialog';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { AuthRouteGuardGuard } from './auth-route-guard.guard';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    SearchComponent,
    AboutComponent,
    PriceCardComponent,
    AddBookComponent,
    EditBookComponent,
    DeleteComponent,
    RulesComponent,
    SearchPipe,
    ConfirmationDialogComponent,
    EditComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule
    
  ],
   providers: [ELibraryService,AuthRouteGuardGuard],
  bootstrap: [AppComponent],
  entryComponents:[ConfirmationDialogComponent],
})
export class AppModule {}
