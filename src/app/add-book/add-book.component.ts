import { Component, OnInit } from '@angular/core';
import { ELibraryService } from '../e-library.service';
import { book } from '../Model/iELibrary';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

public bookId: any;
public bookTitle: any;
public bookDescription:any;
public authorName:any;
public numberOfBooksAvailable: any;

  booklst: any;
  bookList:book[] | undefined;
  usrRol: any;
constructor(private eLibServ:ELibraryService){}
  ngOnInit(): void {
    this.booklst=this.eLibServ.bookList;
    this.bookList=this.booklst;
    localStorage.setItem('userRole','admin');
    this.usrRol=localStorage.getItem('userRole');
}
addBook()
{
  this.eLibServ.bookList.push({
    bookId:this.bookId,
    bookTitle:this.bookTitle,
    bookDescription:this.bookDescription,
   authorName:this.authorName,
    numberOfBooksAvailable:this.numberOfBooksAvailable
  });
  
}
  onSubmit(addbook:any){

  }
}





