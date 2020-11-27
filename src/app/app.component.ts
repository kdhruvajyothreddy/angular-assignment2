import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tweet = { // Created a "tweet" array to assign default initial values to properties used on front end
    body: "......",
    isActive: false,
    likesCounted: 0
  }

}
