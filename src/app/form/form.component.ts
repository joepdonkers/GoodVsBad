import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  healthForm!: FormGroup;
  submitted = false;
  buttonClass = ''; // Default button class

  constructor(private fb: FormBuilder, private router: Router) { } // Inject the Router service

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
    if (this.healthForm.valid) {
      // Handle form submission logic here
      console.log(this.healthForm.value);
      this.submitted = true;
  
      // Navigate to the homepage after successful form submission
      this.router.navigate(['/']); // Replace '/' with the actual route to your homepage
    } else {
      // Mark the form controls as touched to display validation errors
      this.healthForm.markAllAsTouched();
      this.buttonClass = 'btn btn-danger'; // Change button class to red
    }
  }
}