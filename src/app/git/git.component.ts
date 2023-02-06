import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.scss']
})
export class GitComponent implements OnInit{
  url!:String;
  ngOnInit(): void {
    this.url = "https://github.com/david587"
  }

}
