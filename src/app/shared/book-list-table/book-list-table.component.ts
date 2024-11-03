import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { BookListTableDataSource, BookListTableItem } from './book-list-table-datasource';

@Component({
  selector: 'app-book-list-table',
  templateUrl: './book-list-table.component.html',
  styleUrl: './book-list-table.component.scss',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule]
})
export class BookListTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<BookListTableItem>;
  dataSource = new BookListTableDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['isbn', 'title', 'author', 'location', 'category'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
