import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ability } from 'src/app/Ability';
import { Hero } from 'src/app/Hero';
import { HeroService } from 'src/app/services/hero.service';
import { RaceService } from 'src/app/services/race.service';
import { Race } from 'src/app/Race';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css'],
})
export class HeroCardComponent implements OnInit {
  @Input() hero!: Hero;
  @Output() onChangeHero: EventEmitter<Hero> = new EventEmitter();
   mov!: Ability;
   str!: Ability;
   dex!: Ability;
   int!: Ability;
   race !: Race;
   horse : number[] = [];

  constructor(private raceService: RaceService) {}

  ngOnInit(): void {
        this.raceService.getRace(this.hero.race).subscribe((races)=> {
            this.race=races[0];
            this.mov = this.race.mov
            this.str = this.race.str
            this.dex = this.race.dex
            this.int = this.race.int
            this.horse = this.race.horse
        }
        )

    }

  isHorse(i: number): boolean{
    if (!this.race||!this.race.horse) return false
    return this.race.horse.includes(i)
}

  prefixOf(i : number):String{
      if (!this.race) return ""
      return this.race.equip[i]
  }

  setMov(value: number){
    this.hero.movement= value;
    this.onChangeHero.emit(this.hero);
  }
  setStr(value: number){
    this.hero.strength= value;
    this.onChangeHero.emit(this.hero);
  }
  setDex(value: number){
    this.hero.dexterity = value;
    this.onChangeHero.emit(this.hero);
  }
  setInt(value: number){
    this.hero.intelligence = value;
    this.onChangeHero.emit(this.hero);
  }
  

  setName(value: String) {
    this.hero.name = value;
    this.onChangeHero.emit(this.hero);
  }

  setProfession(value: String) {
    this.hero.profession = value;
    this.onChangeHero.emit(this.hero);
  }

  setCloseCombat(value: String) {
    this.hero.closeCombat = Number(value);
    this.onChangeHero.emit(this.hero);
  }

  setRangeCombat(value: String) {
    this.hero.rangeCombat = Number(value);
    this.onChangeHero.emit(this.hero);
  }

  setArmor(value: String) {
    this.hero.armor = Number(value);
    this.onChangeHero.emit(this.hero);
  }
  setArmorItem(value: String) {
    this.hero.armorItem = value;
    this.onChangeHero.emit(this.hero);
  }

  setSkill1(value: String) {
    this.hero.skill1 = value;
    this.onChangeHero.emit(this.hero);
  }

  setSkill2(value: String) {
    this.hero.skill2 = value;
    this.onChangeHero.emit(this.hero);
  }

  setSkill3(value: String) {
    this.hero.skill3 = value;
    this.onChangeHero.emit(this.hero);
  }

  setSkill4(value: String) {
    this.hero.skill4 = value;
    this.onChangeHero.emit(this.hero);
  }

  setEquipment(value: String, i: number) {
    this.hero.equipment[i] = value;
    this.onChangeHero.emit(this.hero);
  }

  setHorse(value: String) {
    this.hero.horse = value;
    this.onChangeHero.emit(this.hero);
  }
  
}


