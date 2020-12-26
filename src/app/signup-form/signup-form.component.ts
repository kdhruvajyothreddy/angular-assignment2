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
    account: new FormGroup({ // Creating a new FormGroup by name "account" to create a nested form
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace
        // Adding our custom validator in the array of validators for the username key
      ], // Creating a array of validator conditions (required and minimum length) for the username key
        UsernameValidators.shouldBeUnique), // Adding the custom async validator separately from other validators
      password: new FormControl('', Validators.required)
    })    
  });
  // Using the "Validators" element to each key of the "form" object to set validation conditions(in this case, "required") 

  get username() {
    return this.form.get("account.username"); // Changing the property get element to extract data from the new form group
  }
  get password() {
    return this.form.get("account.password"); // Changing the property get element to extract data from the new form group
  }
  // The above getter methods username() & password() are to return the key values of "username" and "password" of the "form" object

}
