import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  healthForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.healthForm = this.fb.group({
      gender: ['', Validators.required],
      age: [null, Validators.required],
      hypertension: [false, Validators.required],
      heartDisease: [false, Validators.required],
      smoke: ['', Validators.required],
      bmi: [null, Validators.required],
      hba1c: [null, Validators.required],
      glucoseLevel: [null, Validators.required]
    });
  }

  submitForm() {
    // Check if the form is valid before submitting
    if (this.healthForm.valid) {
      // Handle form submission logic here
      console.log(this.healthForm.value);
      this.submitted = true;
    } else {
      // Mark the form controls as touched to display validation errors
      this.healthForm.markAllAsTouched();
    }
  }
}