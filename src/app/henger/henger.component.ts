/*
* File: henger.component.ts
* Author: Baráth Dávid
* Copyright: 2023, Baráth Dávid
* Group: Szoft 2/N
* Date: 2022-02-07
* Github: https://github.com/david587/
* Licenc: GNU GPL
*/

import { Component,OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-henger',
  templateUrl: './henger.component.html',
  styleUrls: ['./henger.component.scss']
})
export class HengerComponent implements OnInit {
  radius = new FormControl("");
  height = new FormControl("");
  area = new FormControl("");

  areaVisible = false;
  
  constructor(){}
  ngOnInit(): void {
  }
  onKeyup(event:any){
    if(event.key == "Enter"){
      this.onEnterHandler();
    }
  }

  onEnterHandler(){
    this.startCalculations();
  }

  startCalculations(){
    let radius = Number(this.radius.value);
    let height = Number(this.height.value);
    let area = this.calcArea(radius, height);;
    this.area.setValue(String(area));
    // jelenjen meg
    this.areaVisible = true;
  }


  calcArea(radius: number, height: number){
    let area = 2*Math.PI*Math.pow(radius,2)+2*Math.PI*radius*height
    return area;
  }

  onClickCalcButton(){
  this.startCalculations();
  }

}
