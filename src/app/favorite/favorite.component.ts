import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input() isFavorite: boolean; // Setting input annotation to the property "isFavorite"
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.isFavorite = !this.isFavorite;
  }

}
