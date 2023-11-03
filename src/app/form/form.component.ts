import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  healthForm!: FormGroup;
  submitted = false;
  buttonClass = ''; // Default button class

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.healthForm = this.fb.group({
      gender: ['', Validators.required],
      age: [null, Validators.required],
      hypertension: [false, Validators.required],
      heartDisease: [false, Validators.required],
      smoke: ['', Validators.required],
      bmi: [null, Validators.required],
      hba1c: [null, Validators.required],
      glucoseLevel: [null, Validators.required],
    });
  }

  submitForm() {
    
    if (this.healthForm.valid) {
      const formData = this.healthForm.value;

      // Map form data to match the expected request body
      const requestBody = {
        gender: formData.gender === 'male' ? 'Male' : 'Female',
        age: parseFloat(formData.age),
        hypertension: formData.hypertension === 'yes' ? 1 : 0,
        heart_disease: formData.heartDisease === 'yes' ? 1 : 0,
        smoking_history: formData.smoke,
        bmi: parseFloat(formData.bmi),
        HbA1c_level: parseFloat(formData.hba1c),
        blood_glucose_level: parseFloat(formData.glucoseLevel),
      };
      // Send the POST request
      this.http
        .post('http://167.99.38.252:5000/predict', requestBody)
        .subscribe(
          (response) => {
            console.log('POST request successful:', response);
            this.submitted = true;

            // Navigate to the homepage after successful form submission
            this.router.navigate(['/']); // Replace '/' with the actual route to your homepage
          },
          (error) => {
            console.error('POST request error:', error);
          }
        );
    } else {
      // Mark the form controls as touched to display validation errors
      this.healthForm.markAllAsTouched();
      this.buttonClass = 'btn btn-danger'; // Change button class to red
    }
  }
}
