import { Component } from '@angular/core';
import { FavoriteComponent } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post: { 
    title: "Title",
    isFavorite: true;
  }

  onFavoriteChanged(isFavorite) { // Using the value 'isFavorite', which is passed from the front end
    console.log("Favorite Changed to: ", isFavorite); // Logging the value   
  }
}
