import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convert-m-to-k',
  templateUrl: './convert-m-to-k.component.html',
  styleUrls: ['./convert-m-to-k.component.css']
})
export class ConvertMToKComponent implements OnInit {

  clickMessage: number;
  milesToKilometers = 1.60934;
  clickMessage1: number;
  kilometerToMiles = 0.621371;

  
  constructor() { }

    onClickMe(myMessage: number){
    this.clickMessage = myMessage * this.milesToKilometers ;
  }

  onClickMe1(myMessage1: number){
    this.clickMessage1 = myMessage1 * this.kilometerToMiles  ;
  }

  ngOnInit() {
  }

}
