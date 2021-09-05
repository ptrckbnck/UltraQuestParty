import { Component, Input, OnInit } from '@angular/core';
import { faHorseHead } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-attribute-horse-view',
  templateUrl: './attribute-horse-view.component.html',
  styleUrls: ['./attribute-horse-view.component.css']
})
export class AttributeHorseViewComponent implements OnInit {
  @Input() horse!: String;
  @Input() horseInfo!: String;
  @Input() item!: String;
  @Input() itemInfo!: String;
  @Input() prefix!: String;
  faHorseHead = faHorseHead 

  constructor() { }

  ngOnInit(): void {
  }

}

