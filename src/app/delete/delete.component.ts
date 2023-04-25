import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ELibraryService } from '../e-library.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
   public booklist:any;
  public booklst: any;
  public bookList:any[]=[];
  usrRol: any;
constructor(private routes:ActivatedRoute,private eLibServ:ELibraryService,private dialog :MatDialog){}
  ngOnInit(): void {
    this.booklst=this.eLibServ.bookList;
    this.bookList=this.booklst;
    this.usrRol=localStorage.getItem('userRole');
    this.booklist=[];
    }
    deleteBook(index: number)
    {
      const confirmDialog = this.dialog.open(ConfirmationDialogComponent, {
        data: {
          title: 'Confirmation',
          message: 'Are you Sure to delete this item? '
        }
      });
      confirmDialog.afterClosed().subscribe(result => {
        if (result === true) {
          this.eLibServ.bookList.splice(index,1);
           }
           
      });
    }
    
  searchBook='';
  
}                                                                                            
    
 


