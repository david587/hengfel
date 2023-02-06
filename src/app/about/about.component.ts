import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
 
  name !: string;
  version !: string;
  owner !:string;
  group !: string;
  date !: string;

  ngOnInit(): void {
    this.name = "hengfel"
    this.version = "0.0.1"
    this.owner="baráth dávid"
    this.group="szoft2N"
    this.date="2022.02.06"
  }
}
