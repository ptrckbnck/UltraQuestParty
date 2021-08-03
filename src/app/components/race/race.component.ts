import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Race } from 'src/app/Race';
import { RaceService } from 'src/app/services/race.service';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {
  subscription: Subscription;
  tests: Race[] =[];
  
  constructor(private raceService: RaceService) {
    this.subscription = this.raceService.getRaces().subscribe((value) => (this.tests = value));
   }

  ngOnInit(): void {
  }


  click() {
    console.log("submit");


    const str = {
      race: "human",
      ability: "str",
      min: 2,
      max: 4,
      cost: [0,0,2,3]
    }

    const mov = {
      race: "human",
      ability: "str",
      min: 2,
      max: 4,
      cost: [0,0,2,3]
    }

    const dex = {
      race: "human",
      ability: "str",
      min: 2,
      max: 4,
      cost: [0,0,2,3]
    }

    const int = {
      race: "human",
      ability: "str",
      min: 2,
      max: 4,
      cost: [0,0,2,3]
    }

    const equipment = {
      1: "human",
      ability: "str",
      min: 2,
      max: 4,
      cost: [0,0,2,3]
    }

    const newRace = {
      race : "human",
      mov: mov,
      str: str,
      dex: dex,
      int: int,
      equip: ["1 Item",
      "2 Item",
      "3 Item",
      "4 Item",
      "5 Item",
      "6 Item",
      "7 Geldkatze",
      "8 Reitier",
      "9 Rucksack",
      "10 Rucksack"],
      horse : [1]
    }
    this.raceService.addRace(newRace).subscribe()
  }
}
