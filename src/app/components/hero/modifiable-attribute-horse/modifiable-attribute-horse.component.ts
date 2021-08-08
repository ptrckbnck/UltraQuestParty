import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faHorseHead } from '@fortawesome/free-solid-svg-icons';
import { ValueInfoPair } from 'src/app/ValueInfoPair';

@Component({
  selector: 'app-modifiable-attribute-horse',
  templateUrl: './modifiable-attribute-horse.component.html',
  styleUrls: ['./modifiable-attribute-horse.component.css']
})
export class ModifiableAttributeHorseComponent implements OnInit {
  @Output() onChangeHorse: EventEmitter<ValueInfoPair> = new EventEmitter();
  @Output() onChangeItem: EventEmitter<ValueInfoPair> = new EventEmitter();
  @Input() horse!: String;
  @Input() horseInfo!: String;
  @Input() item!: String;
  @Input() itemInfo!: String;
  @Input() prefix!: String;
  faHorseHead = faHorseHead 

  constructor() { }

  ngOnInit(): void {
  }

  onChangeHorsePass(pair :  ValueInfoPair){
    this.onChangeHorse.emit(pair)
  }

  onChangeItemPass(pair :  ValueInfoPair){
    this.onChangeItem.emit(pair)
  }

}