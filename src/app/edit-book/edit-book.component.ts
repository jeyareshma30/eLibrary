import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ELibraryService } from '../e-library.service';
import { book } from '../Model/iELibrary';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  bookList: book[] = [];
  obj:any;
  books:book | undefined
  constructor(private eLibServ:ELibraryService,private routes:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
  this.obj=this.eLibServ.bookList;
  this.bookList=this.obj;
    const routeParams=this.routes.snapshot.paramMap;
    const bookIdFromRoute=Number(routeParams.get('id'))
  this.books=this.bookList.find(books=>books.bookId==bookIdFromRoute)
  }
  onEdit()
  {
    this.router.navigateByUrl('/save');
  }
onSubmit(edit:any)
{

}
  }
  
  



  