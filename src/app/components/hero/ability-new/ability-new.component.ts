import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Ability } from 'src/app/Ability';


@Component({
  selector: 'app-ability-new',
  templateUrl: './ability-new.component.html',
  styleUrls: ['./ability-new.component.css']
})
export class AbilityNewComponent implements OnInit {
  @Input() ability!: Ability;
  @Input() value!: number;
  @Input() prefix!: String;
  @Output() onChangeValue = new EventEmitter<number>()
  showChangeValue : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onToggle(): void {
    this.showChangeValue=!this.showChangeValue;
  }
  onSubmit() {
    this.showChangeValue = false;
    this.value = Number(this.value)
    if (!Number.isInteger(this.value)){this.value = this.ability.min;}
    this.value = Math.floor(this.value);
    if (this.value < this.ability.min){this.value = this.ability.min;}
    if (this.value > this.ability.max){this.value = this.ability.max;}
    this.onChangeValue.emit(this.value);
    }

}
