import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convert-m-to-k',
  templateUrl: './convert-m-to-k.component.html',
  styleUrls: ['./convert-m-to-k.component.css']
})
export class ConvertMToKComponent implements OnInit {

  clickMessage: string = "";
  clickMessage1: string = "";

  
  constructor() { }

   onClickMe() {
    document.getElementById('mi-to-ki').innerHTML = document.getElementById('miles').innerText + ' miles is ' + (parseInt(document.getElementById('miles').innerText) * 1.60934) + ' kilometeres!!';
     document.getElementById('ki-to-mi').innerHTML = document.getElementById('kilometers').innerText + ' kilometers is ' + (parseInt(document.getElementById('kilometers').innerText) * 0.621371) + ' miles!!';
  }

  ngOnInit() {
  }

}
