import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ELibraryService } from '../e-library.service';
import { book } from '../Model/iELibrary';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
   obj:any={
  bookId:'110',
    bookTitle:'Angular8',
    bookDescription:'Description for Angular8',
    authorName:'Jeni',
    numberOfBooksAvailable:'80'
  };
  bookList: book[] = [];
  books:any;
booklst:any;
    constructor(private eLibServ:ELibraryService,private routes:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.booklst=this.eLibServ.bookList;
    this.bookList=this.booklst;
    const routeParams=this.routes.snapshot.paramMap;
    const bookIdFromRoute=Number(routeParams.get('id'))
  this.books=this.bookList.find(books=>books.bookId==bookIdFromRoute)
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
}
   
  
  
  



  