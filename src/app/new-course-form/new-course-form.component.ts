import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {

  form = new FormGroup({
    topics: new FormArray([]) // Creating a FormFroup where an instance of FormArray is created, as we will be passing an array of objects
  });

  addTopic(topic: HTMLInputElement){  // Declaring the expecting value "topic" as an "HTMLInputElement" property
    this.topics.push(new FormControl(topic.value)); // Pushing the passed value to the FormArray
    topic.value = ''; // To clear value entered on the input field after the value is pushed into the array
  }

  get topics() {
    return this.form.get('topics') as FormArray; 
  }
  // Creating a get method to return the "topics" property as a Form Array

  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic); // Gathering the index of the "topics" property
    this.topics.removeAt(index); // Removing the specific topics property from the array based on the index value
  }

}
