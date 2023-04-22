import { Component, OnInit } from '@angular/core';
import { ELibraryService } from '../e-library.service';

@Component({
  selector: 'app-search-admin',
  templateUrl: './search-admin.component.html',
  styleUrls: ['./search-admin.component.css']
})
export class SearchAdminComponent implements OnInit {
  public booklst: any;
  public bookList:any[]=[];
  usrRol!: any;
constructor(private eLibSer:ELibraryService){}
  ngOnInit(): void {
    this.booklst=this.eLibSer.bookList;
    this.bookList=this.booklst;
    localStorage.setItem('userRole','admin');
    this.usrRol=localStorage.getItem('userRole');
  }
 public searchBook: any;
}
