import { Routes } from '@angular/router';
import { BookListComponent } from './pages/book-list/book-list.component';
import { AddBookComponent } from './pages/add-book/add-book.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: BookListComponent },
    { path: 'add-book', component: AddBookComponent },
    { path: '**', redirectTo: '/home' }
];
