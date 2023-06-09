import { Component, OnInit } from '@angular/core';
import { ELibraryService } from '../e-library.service';
import { book } from '../Model/iELibrary';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public booklst: any;
  public bookList:any[]=[];
  usrRol:string | null | undefined;
constructor(private eLibSer:ELibraryService){}
  ngOnInit(): void {
    this.booklst=this.eLibSer.bookList;
    this.bookList=this.booklst;
    localStorage.setItem('userType','user')
    this.usrRol=localStorage.getItem('userType');
    
  }
 public searchBook: any;
  

  dec(booklst: any){
    booklst.numberOfBooksAvailable=booklst.numberOfBooksAvailable - 1;
  }
  loggedin(){
    return localStorage.getItem('token');
  }
  onSearch()
  {
    localStorage.removeItem('token');
  }

}
