import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Team } from '../../models/team.model';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
}) 


export class TeamListComponent implements OnInit {


  teams: Team[];
  @Output() selectedTeam = new EventEmitter<Team>();


  constructor() {}

  
  ngOnInit() {
    this.teams = [
      new Team(
        'FC Barcelone',
         'Més que un club',
          'http://fc-barcelone.com/assets/img/fcb-logo-big.png'),
      new Team(
        'Real Madrid',
        'Hala Madrid !',
        'https://upload.wikimedia.org/wikipedia/fr/thumb/c/c7/Logo_Real_Madrid.svg/731px-Logo_Real_Madrid.svg.png'
      )
    ];
  }

  onSelectTeam(team) {
    console.log('2.TeamList : onSelectTeam(team)-Emit = ' + team)
    this.selectedTeam.emit(team);
  }
}
