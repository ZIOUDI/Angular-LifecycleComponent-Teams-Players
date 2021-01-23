import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Team } from '../../../models/team.model';

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.css']
})
export class TeamItemComponent implements OnInit {

  @Input() team: Team;
  @Output() selectedTeam = new EventEmitter<Team>();

  constructor() {}
  
  ngOnInit() {}

  onSelectItem() {
    console.log('1.Item : onSelectTeam()Emit = ' + this.team)
    this.selectedTeam.emit(this.team);
  }
  
}
