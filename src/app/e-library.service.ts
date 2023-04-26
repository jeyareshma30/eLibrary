import { Injectable, OnInit } from '@angular/core';
import { book } from './Model/iELibrary';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ELibraryService {

  constructor(private router:Router) { }
  
  public bookList:book[]=[
    {
      bookId:101,
      bookTitle:"Angular Up and Running",
      bookDescription:"This book will demystify Angular as a framework, as well as provide clear instructions and examples on how to get started with writing scalable Angular applications.",
      authorName:"Shyam Seshadri ",
      numberOfBooksAvailable:65
    },
    {
      bookId:102,
      bookTitle:"Learn AngularJS in 1 Day",
      bookDescription:"Angular JS is responsible for making the website interactive and responsive. It helps designer and developers to eliminate much of the code usually needed for websites development.",
      authorName:"Krishna Rungta",
      numberOfBooksAvailable:58
    },
    {
      bookId:103,
      bookTitle:"Angular:From Theory To Practice",
      bookDescription:"The first chapter in the course is a quickstart where you dive straight into writing your first Angular application. We use the web editor plunker so you can get started writing code ASAP.",
      authorName:"Asim Hussain",
      numberOfBooksAvailable:76
    },
    {
      bookId:104,
      bookTitle:"Angular 2 Cookbook",
      bookDescription:"This book is also geared towards developers with experience in Angular 1 who are looking to make the transition. What You Will Learn • Understand how to best move an Angular 1 application to Angular 2.",
      authorName:"Matt Frisbie",
      numberOfBooksAvailable:54
    },
    {
      bookId:105,
      bookTitle:"Angular 6 for Enterprise",
      bookDescription:"Angular 6 for Enterprise-Ready Web Applications follows a hands-on and minimalist approach demonstrating how to design and architect high quality apps.",
      authorName:"Doguhan Uluca",
      numberOfBooksAvailable:85
    },
    {
      bookId:106,
      bookTitle:"Pro Angular 6",
      bookDescription:"Best-selling author Adam Freeman shows you how to use Angular in your projects, starting from the nuts and bolts and building up to the most advanced and sophisticated features, going in-depth to give you the knowledge you need.",
      authorName:"Adam Freeman",
      numberOfBooksAvailable:52
    },
    {
      bookId:107,
      bookTitle:"Getting MEAN with Mongo,Express,Angular,and Node",
      bookDescription:"Traditional web dev stacks can require different programming languages for every layer, creating a complex mashup of code and frameworks.",
      authorName:"Simon Holmes",
      numberOfBooksAvailable:38
    },
    {
      bookId:108,
      bookTitle:"Angular 2 Development with TypeScript",
      bookDescription:"Angular 2 Development with Typescript teaches you what you need to start using Angular, while you also learn TypeScript and how to take advantage of its benefits.",
      authorName:"Yakov Fain",
      numberOfBooksAvailable:90
    },
  ]
  onGet()
  {
    return this.bookList;
  }
  onEdit(bookList:book){
    this.bookList.push(bookList);
  }

}



   

  



