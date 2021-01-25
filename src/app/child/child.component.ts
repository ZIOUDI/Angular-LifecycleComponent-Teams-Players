import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges }
       from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges {

  private myNumber : number;
    indexOnChanges : number = 0;
  constructor() { }

  @Input()
  get myNewNumber()     { return this.myNumber;  }
  set myNewNumber(value){ this.myNumber = value; }

  ngOnChanges(changes: SimpleChanges) {
     console.log('ngOnChanges n° '+this.indexOnChanges +' : ', changes);
     this.indexOnChanges++;
  }

ngOnInit(): void {
  console.log('ngOnInit...: ', this.myNewNumber)
}

}
