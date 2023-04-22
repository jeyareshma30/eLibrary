import { Component,OnInit } from '@angular/core';
import { book } from '../Model/iELibrary';
import { ELibraryService } from '../e-library.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-save-book',
  templateUrl: './save-book.component.html',
  styleUrls: ['./save-book.component.css']
})
export class SaveBookComponent implements OnInit {
  bookList: any[] = [];
  obj:any={
    bookId:'',
    bookTitle:'',
    bookDescription:'',
    authorName:'',
    numberOfBooksAvailable:''
  };
  books:any;
  constructor(private eLibServ:ELibraryService,private routes:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
  const localData=localStorage.getItem('bookList');
    if(localData != null){
      this.bookList=JSON.parse(localData);
    }
  }
  onSave(){
    this.bookList.push(this.obj);
    localStorage.setItem('bookList',JSON.stringify(this.bookList));
     
    this.obj={
      bookId:'',
      bookTitle:'',
      bookDescription:'',
      authorName:'',
      numberOfBooksAvailable:''
    };};
onSubmit(edit:any){}
}


