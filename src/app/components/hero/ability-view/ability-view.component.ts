import { Component, Input, OnInit } from '@angular/core';
import { Ability } from 'src/app/Ability';

@Component({
  selector: 'app-ability-view',
  templateUrl: './ability-view.component.html',
  styleUrls: ['./ability-view.component.css']
})
export class AbilityViewComponent implements OnInit {
  @Input() ability!: Ability;
  @Input() value!: number;
  @Input() prefix!: String;
  constructor() { }


  ngOnInit(): void {
  }

}
