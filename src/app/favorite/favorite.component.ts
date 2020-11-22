import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; //Adding imports for Input, Output and Event change

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isFavorite: boolean; 
  @Output() change = new EventEmitter(); 
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit(this.isFavorite); 
    // Passing the value 'isFavorite' when event is emitted to be available for every subscriber of this event
  }
  

}
