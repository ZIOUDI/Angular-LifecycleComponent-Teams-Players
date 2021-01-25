import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'component-life-cycle';
  feature = 'teams';
  onSelectFeature(feature) {this.feature = feature;
  }

private number : number = 132546;

 name : number = 31;
 user = {name :"zioudi",prof :"dev"}

 updateParam(value) {
 console.log('------modifier Param------');
 this.name=value }
 updateObject(value){
 console.log('------modifier Object-----');
 this.user.name=value }

 get counter()     { return this.number; }
 set counter(value){ this.number = value;}

  increment(){  this.counter++;}
  decrement(){  this.counter--;}

}

