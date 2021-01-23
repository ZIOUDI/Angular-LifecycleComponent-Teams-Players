import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() selectedFeature = new EventEmitter<string>();


  constructor() {}

  ngOnInit() {}


  onSelectFeature(feature) {
    //console.log(feature)
    this.selectedFeature.emit(feature);
  }
}
