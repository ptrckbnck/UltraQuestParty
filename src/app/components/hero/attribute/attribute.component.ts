import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {
  @Input() prefix!: String;
  @Input() value!: String;
  showTooltip: Boolean = false;

  constructor() { }
  

  ngOnInit(): void {
    
  }

}
