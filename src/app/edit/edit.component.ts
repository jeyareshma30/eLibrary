import { Component, OnInit } from '@angular/core';
import { book } from '../Model/iELibrary';
import { ActivatedRoute, Router } from '@angular/router';
import { ELibraryService } from '../e-library.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  bookId:any;
  bookTitle:any;
  bookDescription:any;
  authorName:any;
  numberOfBooksAvailable:any;
  public booklst: any;
  public bookList:book[]=[];
  books:book | undefined;
  usrRol: any;
  constructor(private route:Router,private routes:ActivatedRoute,private eLibServ:ELibraryService){}
  ngOnInit(): void {
    this.booklst=this.eLibServ.onGet();
    this.bookList=this.booklst;
    this.usrRol=localStorage.getItem('userRole');
    };
  searchBook:any;
}

