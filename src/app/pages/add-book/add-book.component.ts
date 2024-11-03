import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [HeaderComponent, MatInputModule, MatButtonModule, MatFormFieldModule, MatIconModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss'
})
export class AddBookComponent implements OnInit {

  addBookFormGroup: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
    this.addBookFormGroup = this.formBuilder.group({
      isbn: [null, { Validators: [Validators.required] }],
      title: ['', { Validators: [Validators.required] }],
      author: ['', { Validators: [Validators.required] }],
      location: ['', { Validators: [Validators.required] }],
      category: ['', { Validators: [Validators.required] }],
      price: ['', {}]
    })
  }

  ngOnInit(): void {
      
  }

  onAddBook() {
    console.log(this.addBookFormGroup.value);
  }

  // onClearForm() {
  //   this.addBookFormGroup.reset();
  // }

}
