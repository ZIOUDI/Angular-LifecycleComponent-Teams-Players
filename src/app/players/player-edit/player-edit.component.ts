import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Player } from '../../models/player.model';
@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css']
})


export class PlayerEditComponent implements OnInit {

  @Output() playerAdded = new EventEmitter<Player>();

  @ViewChild('nameInput') nameInput: ElementRef; // ~~ #nameInput (html)
  @ViewChild('ageInput') ageInput: ElementRef;   // ~~ #ageInput  (html)
  
  constructor() {}

  ngOnInit() {}

  onAddPlayer() {
    const name = this.nameInput.nativeElement.value;
    const age = this.ageInput.nativeElement.value;
    const newPlayer = new Player(name, age);
    //debugger
    this.playerAdded.emit(newPlayer);
  }
}


