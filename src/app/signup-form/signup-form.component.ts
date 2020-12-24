import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace
      // Adding our custom validator in the array of validators for the username key
    ]), // Creating a array of validator conditions (required and minimum length) for the username key
    password: new FormControl('', Validators.required)
  });
  // Using the "Validators" element to each key of the "form" object to set validation conditions(in this case, "required") 

  get username() {
    return this.form.get("username");
  }
  get password() {
    return this.form.get("password");
  }
  // The above getter methods username() & password() are to return the key values of "username" and "password" of the "form" object

}