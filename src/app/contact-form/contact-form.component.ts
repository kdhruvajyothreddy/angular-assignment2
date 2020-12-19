import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactMethods = [
    {id:1, name: "Email"},
    {id:2, name: "Form"},
  ];
  // Array list to display them on front end as drop down

  log(x: string){
    console.log(x);    
  }

  submit(f) { // Creating a submit method that is called in the form and using the template variable "f" to log it
    console.log(f);    
  }

  
}
