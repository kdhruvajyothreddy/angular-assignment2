import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses;

  loadCourses() {
    this.courses = [
      {id: 1, name: 'course1'},
      {id: 2, name: 'course2'},
      {id: 3, name: 'course3'},
      {id: 4, name: 'course4'}
    ];
  }
  // "loadCourses()" method to be called on the front end to load the list of objects

  trackCourse(index, course) {
    return course ? course : undefined;
  }
}
