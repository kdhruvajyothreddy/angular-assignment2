import { Component } from '@angular/core';
import { FavoriteChangedEventArgs, FavoriteComponent } from './favorite/favorite.component'; 

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

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) { 
    console.log("Favorite Changed to: ", eventArgs); 
  }
}
