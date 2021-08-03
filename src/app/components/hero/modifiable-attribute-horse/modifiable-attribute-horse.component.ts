import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faHorseHead } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modifiable-attribute-horse',
  templateUrl: './modifiable-attribute-horse.component.html',
  styleUrls: ['./modifiable-attribute-horse.component.css']
})
export class ModifiableAttributeHorseComponent implements OnInit {
  @Output() onChangeValue: EventEmitter<String> = new EventEmitter();
  @Input() prefix!: String;
  @Input() value!: String;
  faHorseHead = faHorseHead 
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