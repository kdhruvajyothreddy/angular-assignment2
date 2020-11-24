import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

export interface FavoriteChangedEventArgs { 
  newValue: boolean
}

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated // To Encapsulate the component and emulate shadow dom
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
