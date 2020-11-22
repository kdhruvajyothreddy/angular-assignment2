import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post: { // Creating a component to set "isFavorite" property to true
    title: "Title",
    isFavorite: true;
  }

  onFavoriteChanged() { // Method created to be called to create a log when an event is triggered
    console.log("Favorite Changed");    
  }
}
