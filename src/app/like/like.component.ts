import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input('isActive') isActive: boolean;
  @Input('likesCounted') likesCounted: number; // Creating Input properties "isActive" and "likesCounted" to be used

  onClick() { // Method to create a logic to manipulate "isActive" and "likesCounted" properties
    this.isActive = !this.isActive;
    this.likesCounted += (this.isActive) ? 1 : -1
  }

}
