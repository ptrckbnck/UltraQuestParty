import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Ability } from 'src/app/Ability';
import { Hero } from 'src/app/Hero';
import { Race } from 'src/app/Race';
import { RaceService } from 'src/app/services/race.service';
import { faCrow, faUserInjured } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero-card-view',
  templateUrl: './hero-card-view.component.html',
  styleUrls: ['./hero-card-view.component.css']
})
export class HeroCardViewComponent implements OnInit {
  @Input() hero!: Hero;
  @Output() onChangeHero: EventEmitter<Hero> = new EventEmitter();
  mov!: Ability;
  str!: Ability;
  dex!: Ability;
  int!: Ability;
  race!: Race;
  horse: number[] = [];
  @Input() prefix!: String;
  faCrow = faCrow;
  faUserInjured = faUserInjured;

  constructor(private raceService: RaceService) {
  }



  ngOnInit(): void {
    this.raceService.getRace(this.hero.race).subscribe((races) => {
      this.race = races[0];
      this.mov = this.race.mov;
      this.str = this.race.str;
      this.dex = this.race.dex;
      this.int = this.race.int;
      this.horse = this.race.horse;
    });
  }

  isHorse(i: number): boolean {
    if (!this.race || !this.race.horse) return false;
    return this.race.horse.includes(i);
  }

  prefixOf(i: number): String {
    if (!this.race) return '';
    return this.race.equip[i];
  }
  getStones() {
    if ('stones' in this.hero) {
      return this.hero.stones;
    }
    return 0;
  }
}
