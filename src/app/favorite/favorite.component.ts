import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; //Adding imports for Input, Output and Event change

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isFavorite: boolean; // Implementing alias for input property 'isFavorite'
  @Output() change = new EventEmitter(); // Creating an Output property for the event change
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit(); // To emit an event when the property 'change' is called 
  }
  

}
