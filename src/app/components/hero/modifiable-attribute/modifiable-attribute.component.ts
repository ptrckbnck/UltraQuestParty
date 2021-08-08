import { Component, Input,Output, OnInit, EventEmitter,ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modifiable-attribute',
  templateUrl: './modifiable-attribute.component.html',
  styleUrls: ['./modifiable-attribute.component.css']
})
export class ModifiableAttributeComponent implements OnInit {
  @Output() onChangeValue: EventEmitter<String> = new EventEmitter();
  @Input() prefix!: String;
  @Input() value!: String;
  showChangeValue: Boolean = false;
  @ViewChild("top") top!: ElementRef;

  constructor() { }
  

  ngOnInit(): void {
    
  }

  onToggle(): void {
    this.showChangeValue=!this.showChangeValue;

  }
  onSubmit() {
    this.showChangeValue = false;
    this.onChangeValue.emit(this.value);
    this.top.nativeElement.focus();
    }

}
