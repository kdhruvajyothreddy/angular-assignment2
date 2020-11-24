import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface FavoriteChangedEventArgs { 
  newValue: boolean
}

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // The 'styles' definition called on the component is defined later, so 'styles' takes higher precedence than 'styleUrls'
  styles: [ 
    `
      .fa-star{
        color: red;
      }
  `
  ]
})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isFavorite: boolean; 
  @Output('change') change = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({ newValue: this.isFavorite}); 
  }
  

}
