import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
    {id: 4, name: 'course4'}
  ]; // Created a list of objects to render each object

  onAdd() {
    this.courses.push({id: 5, name: 'course5'});
    // To append the course object to the list to be added on the front end
  }

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
    //  To remove the course object that was passed to this method from the list of objects on front end
  }
}
