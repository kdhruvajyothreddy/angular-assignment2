import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; //Adding imports for Input, Output and Event change

export interface FavoriteChangedEventArgs { // Creating an interface for the property/value
  newValue: boolean
}

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isFavorite: boolean; 
  @Output('change') change = new EventEmitter(); // Creating an alias 'change' for the output property 'change'
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({ newValue: this.isFavorite}); 
    // Passing an object 'newValue' with the value 'isFavorite' when event is emitted to be available for every subscriber of this event
  }
  

}
