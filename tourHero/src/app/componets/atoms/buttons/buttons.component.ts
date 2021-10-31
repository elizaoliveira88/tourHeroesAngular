import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor() { }
  @Input() buttonDescription = ''
  @Input() buttonStyle = ''
  ngOnInit(): void {
  }

}
