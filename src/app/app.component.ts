import { Component } from '@angular/core';
import { FavoriteChangedEventArgs, FavoriteComponent } from './favorite/favorite.component'; 
// importing the interface 'FavoriteChangedEventArgs' from the 'FavoriteComponent'

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

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) { // Passing the object from the 'FavoriteComponent'
    console.log("Favorite Changed to: ", eventArgs); // Logging the value   
  }
}
