import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core';
import { ValueInfoPair } from 'src/app/ValueInfoPair';

@Component({
  selector: 'app-modifiable-attribute-w-tooltip',
  templateUrl: './modifiable-attribute-w-tooltip.component.html',
  styleUrls: ['./modifiable-attribute-w-tooltip.component.css']
})
export class ModifiableAttributeWTooltipComponent implements OnInit {
  @Output() onChangeValue: EventEmitter<ValueInfoPair> = new EventEmitter();
  @Input() prefix!: String;
  @Input() value!: String;
  @Input() valueTooltip : String = "";
  showChangeValue: Boolean = false;
  showTooltip: Boolean = false;

  constructor() { }
  

  ngOnInit(): void {
    
  }

  onToggle(): void {
    if (this.showChangeValue){
      this.onChangeValue.emit({value:this.value, info: this.valueTooltip});
    }
    this.showChangeValue=!this.showChangeValue;
  }


  onSubmit() {
    this.showChangeValue = false;
    this.onChangeValue.emit({value:this.value, info: this.valueTooltip});
    }

  onTooltip(): void {
    this.showTooltip=!this.showTooltip;
  }

}
