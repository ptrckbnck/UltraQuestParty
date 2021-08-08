import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ability } from 'src/app/Ability';
import { Hero } from 'src/app/Hero';
import { RaceService } from 'src/app/services/race.service';
import { Race } from 'src/app/Race';
import { ValueInfoPair } from 'src/app/ValueInfoPair';
import { faCrow, faUserInjured } from '@fortawesome/free-solid-svg-icons';
import { MatCheckboxChange } from '@angular/material/checkbox';

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

  setMov(value: number) {
    if (this.hero.movement != value) {
      this.hero.movement = value;
      this.onChangeHero.emit(this.hero);
    }
  }
  setStr(value: number) {
    if (this.hero.strength != value) {
      this.hero.strength = value;
      this.onChangeHero.emit(this.hero);
    }
  }
  setDex(value: number) {
    if (this.hero.dexterity != value) {
      this.hero.dexterity = value;
      this.onChangeHero.emit(this.hero);
    }
  }
  setInt(value: number) {
    if (this.hero.intelligence != value) {
      this.hero.intelligence = value;
      this.onChangeHero.emit(this.hero);
    }
  }

  setName(value: String) {
    if (this.hero.name != value) {
      this.hero.name = value;
      this.onChangeHero.emit(this.hero);
    }
  }

  setProfession(pair: ValueInfoPair) {
    if (
      this.hero.profession != pair.value ||
      this.hero.professionInfo != pair.info
    ) {
      this.hero.profession = pair.value;
      this.hero.professionInfo = pair.info;
      this.onChangeHero.emit(this.hero);
    }
  }

  setInjured(change: MatCheckboxChange) {
    if (this.hero.injured != change.checked) {
      this.hero.injured = change.checked;
      this.onChangeHero.emit(this.hero);
    }
  }

  setCursed(change: MatCheckboxChange) {
    if (this.hero.cursed != change.checked) {
      this.hero.cursed = change.checked;
      this.onChangeHero.emit(this.hero);
    }
  }

  setCloseCombat(value: String) {
    if (this.hero.closeCombat != Number(value)) {
      this.hero.closeCombat = Number(value);
      this.onChangeHero.emit(this.hero);
    }
  }

  setRangeCombat(value: String) {
    if (this.hero.rangeCombat != Number(value)) {
      this.hero.rangeCombat = Number(value);
      this.onChangeHero.emit(this.hero);
    }
  }

  setArmor(value: String) {
    if (this.hero.armor != Number(value)) {
      this.hero.armor = Number(value);
      this.onChangeHero.emit(this.hero);
    }
  }
  setArmorItem(pair: ValueInfoPair) {
    if (this.hero.armorItem != pair.value || this.hero.armorItem != pair.info) {
      this.hero.armorItem = pair.value;
      this.hero.armorItemInfo = pair.info;
      this.onChangeHero.emit(this.hero);
    }
  }

  setSkill1(pair: ValueInfoPair) {
    if (this.hero.skill1 != pair.value || this.hero.skill1Info != pair.info) {
      this.hero.skill1 = pair.value;
      this.hero.skill1Info = pair.info;
      this.onChangeHero.emit(this.hero);
    }
  }

  setSkill2(pair: ValueInfoPair) {
    if (this.hero.skill2 != pair.value || this.hero.skill2Info != pair.info) {
      this.hero.skill2 = pair.value;
      this.hero.skill2Info = pair.info;
      this.onChangeHero.emit(this.hero);
    }
  }

  setSkill3(pair: ValueInfoPair) {
    if (this.hero.skill3 != pair.value || this.hero.skill3Info != pair.info) {
      this.hero.skill3 = pair.value;
      this.hero.skill3Info = pair.info;
      this.onChangeHero.emit(this.hero);
    }
  }

  setSkill4(pair: ValueInfoPair) {
    if (this.hero.skill4 != pair.value || this.hero.skill4Info != pair.info) {
      this.hero.skill4 = pair.value;
      this.hero.skill4Info = pair.info;
      this.onChangeHero.emit(this.hero);
    }
  }

  setNative5(value: String) {
    if (this.hero.native5 != value) {
      this.hero.native5 = value;
      this.onChangeHero.emit(this.hero);
    }
  }

  setNative6(value: String) {
    if (this.hero.native6 != value) {
      this.hero.native6 = value;
      this.onChangeHero.emit(this.hero);
    }
  }

  setEquipment(pair: ValueInfoPair, i: number) {
    if (
      this.hero.equipment[i] != pair.value ||
      this.hero.equipmentInfo[i] != pair.info
    ) {
      this.hero.equipment[i] = pair.value;
      this.hero.equipmentInfo[i] = pair.info;
      this.onChangeHero.emit(this.hero);
      console.log(this.hero.equipment);
      
    }
  }

  setHorse(pair: ValueInfoPair) {
    if (this.hero.horse != pair.value || this.hero.horseInfo != pair.info) {
      this.hero.horse = pair.value;
      this.hero.horseInfo = pair.info;
      this.onChangeHero.emit(this.hero);
    }
  }

  setStones(value: String) {
    if (this.hero.stones != Number(value)) {
      this.hero.stones = Number(value);
      this.onChangeHero.emit(this.hero);
    }
  }

  getStones() {
    if ('stones' in this.hero) {
      return this.hero.stones;
    }
    return 0;
  }
}
