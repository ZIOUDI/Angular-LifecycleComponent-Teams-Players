import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team.model';

@Component({
  selector: 'teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  selectedTeam: Team;
  

  onSelectTeam(team) {
    console.log('3.Teams : onSelectTeam(team)-Emit = ' + team)

    this.selectedTeam = team;
    console.log('==> this.selectedTeam = ' + this.selectedTeam)

  }

  constructor() { console.log('-Constructeur' )}
  ngOnChanges( ) {
   }
  ngOnInit(): void {
   }
  /* 
  ngOnDoChck( ) {
    console.log('-ngOnCheck-' )
  }
  ngAfterContentInit() {
    console.log('     -ngAfterContentInit-' )
  }
  ngAfterContentChecked() {
    console.log('     -ngAfterContentChecked-' )
  }

  ngAfterViewInit() {
    console.log('     -ngAfterViewInit-' )
  }
  ngAfterViewChecked() {
    console.log('     -ngAfterViewChecked-' )
  }

  ngOnDestroy() {
    console.log('-ngOnDestroy-' )
  } */

}
