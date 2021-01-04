import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validator';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) { // Injecting FormBuilder instead going with the traditional approach like done in signup-form
    this.form = fb.group({  // Initialize the form with form fields using FormBuilder group and adding all the necessary Validators
      oldPassword: ['', Validators.required, PasswordValidators.isOldPasswordValid], // Using the custom validator isoldPasswordValid from PasswordValidators class
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: PasswordValidators.passwordsShouldMatch  
      // Declaring passwordShouldMatch validator from PasswordValidators class to be applied for the whole form
    })
  }  
  
  // Declaring getter methods for the form fields to return values from the input fields
  get oldPassword() {
    return this.form.get("oldPassword");
  }

  get newPassword() {
    return this.form.get("newPassword");
  }

  get confirmPassword() {
    return this.form.get("confirmPassword");
  }
  

}
