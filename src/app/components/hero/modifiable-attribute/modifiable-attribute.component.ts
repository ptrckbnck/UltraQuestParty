import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modifiable-attribute',
  templateUrl: './modifiable-attribute.component.html',
  styleUrls: ['./modifiable-attribute.component.css']
})
export class ModifiableAttributeComponent implements OnInit {
  @Output() onChangeValue: EventEmitter<String> = new EventEmitter();
  horse!: boolean;
  @Input() prefix!: String;
  @Input() value!: String;
  showChangeValue: Boolean = false;

  constructor() { }
  

  ngOnInit(): void {
    
  }

  onToggle(): void {
    this.showChangeValue=!this.showChangeValue;

  }
  onSubmit() {
    this.showChangeValue = false;
    this.onChangeValue.emit(this.value);
    }

}
