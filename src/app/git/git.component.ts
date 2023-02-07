/*
* File: git.component.ts
* Author: Baráth Dávid
* Copyright: 2023, Baráth Dávid
* Group: Szoft 2/N
* Date: 2022-02-07
* Github: https://github.com/david587/
* Licenc: GNU GPL
*/


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
