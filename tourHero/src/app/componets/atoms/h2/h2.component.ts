import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-h2',
  templateUrl: './h2.component.html',
  styleUrls: ['./h2.component.css']
})
export class H2Component implements OnInit {
title = 'Top Heroes'
  constructor() { }

  ngOnInit(): void {
  }

}
