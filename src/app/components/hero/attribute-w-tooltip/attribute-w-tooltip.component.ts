import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-w-tooltip',
  templateUrl: './attribute-w-tooltip.component.html',
  styleUrls: ['./attribute-w-tooltip.component.css']
})
export class AttributeWTooltipComponent implements OnInit {
  @Input() prefix!: String;
  @Input() value!: String;
  @Input() valueTooltip : String = "";
  showTooltip: Boolean = false;

  constructor() { }
  

  ngOnInit(): void {
    
  }

  onTooltip(): void {
    this.showTooltip=!this.showTooltip;
  }
}
