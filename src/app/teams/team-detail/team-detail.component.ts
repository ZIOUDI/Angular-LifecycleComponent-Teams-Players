import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../../models/team.model' ;

@Component({
  selector: 'team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  @Input() team: Team;

  constructor() {                  console.log('1-Constructeur' )}
  ngOnChanges( ) {                 console.log('2-ngOnChange-' )  }
  ngOnInit(): void {               console.log('3-ngOnInit-' )  }
  ngDoCheck( ) {                   console.log('4-ngOnCheck-' )  }
  ngAfterContentInit() {           console.log('------5-ngAfterContentInit-' )  }
  ngAfterContentChecked() {        console.log('------6-ngAfterContentChecked-' )  }
  ngAfterViewInit() {              console.log('------7-ngAfterViewInit-' )  }
  ngAfterViewChecked() {           console.log('------8-ngAfterViewChecked-' )  }
  ngOnDestroy() {                  console.log('9-ngOnDestroy-' )  }

}

