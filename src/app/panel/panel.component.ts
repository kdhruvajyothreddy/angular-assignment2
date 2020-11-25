import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bootstrap-panel', // Created a panel component and changed the selector name to "bootstrap-panel" to avoid confusion
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
