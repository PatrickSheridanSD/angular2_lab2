import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miles-to-kilometeres',
  templateUrl: './miles-to-kilometeres.component.html',
  styleUrls: ['./miles-to-kilometeres.component.css']
})
export class MilesToKilometeresComponent implements OnInit {

   clickMessage: number;
   milesToKilo: number = 1.60934;
    clickMessage1: number;
    kiloToMiles: number = 0.621371;


  constructor() { }

   onClickMe(myMessage: number){
    this.clickMessage = myMessage * this.milesToKilo;
  }

   onClickMe1(myMessage1: number){
    this.clickMessage1 = myMessage1 * this.kiloToMiles;
  }

  ngOnInit() {
  }

}
