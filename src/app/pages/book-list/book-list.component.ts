import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { StatBoxComponent } from "../../shared/stat-box/stat-box.component";
import { BookListTableComponent } from "../../shared/book-list-table/book-list-table.component";

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [HeaderComponent, StatBoxComponent, BookListTableComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit {

  bookCollectionStats: { title: string, value: number, icon: string }[] = [{title: 'Total Books', value: 20, icon: 'home'}, 
    {title: 'Borrowed Books', value: 10, icon: 'home'}, {title: 'New Books', value: 10, icon: 'home'}];

  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

}
