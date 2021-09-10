import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Hero } from 'src/app/Hero';
import { Party } from 'src/app/Party';
import { Race } from 'src/app/Race';
import { HeroService } from 'src/app/services/hero.service';
import { PartyService } from 'src/app/services/party.service';
import { RaceService } from 'src/app/services/race.service';
import { faSkull } from '@fortawesome/free-solid-svg-icons';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css'],
})
export class PartyComponent implements OnInit {
  party: Party = {
    player: '',
    name: '',
    heroes: [],
    quest1: '',
    quest2: '',
    quest3: '',
    fame: '',
    honor: '',
    location: '',
  };
  heroes: Hero[] = [];
  hero_ids: number[] = [];
  heroes_subscription?: Subscription;
  party_subscription?: Subscription;
  allRaces_subscription?: Subscription;
  nk: number = 0;
  nku: number = 0;
  nko: number = 0;
  nkm: number = 0;
  fk: number = 0;
  fku: number = 0;
  fko: number = 0;
  fkm: number = 0;
  nfk: number = 0;
  nfku: number = 0;
  nfko: number = 0;
  nfkm: number = 0;
  nfkou: number = 0;
  showNewHeroValue: boolean = false;
  raceValue: String = '';
  faSkull = faSkull;
  allRaces: String[] = [];

  constructor(
    private raceService: RaceService,
    private heroService: HeroService,
    private partyService: PartyService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      if (params['name']) {
        this.party.name = String(params['name']);

        this.partyService.getParty(this.party.name).subscribe((parties) => {
          if (parties && parties.length) {
            this.party = parties[0];
          } else {
            this.partyService.createParty(this.party).subscribe((party) => {
              this.party = party;
            });
          }
        });
      }
    });
  }

  ngOnInit(): void {
    if (!this.party.name) {
      return;
    }
    this.party_subscription = this.partyService
      .getParty(this.party.name)
      .subscribe((parties) => {
        if (!parties || !parties.length) {
          return;
        }
        this.party = parties[0];
        if (!parties[0].heroes || !parties[0].heroes.length) {
          return;
        }
        this.hero_ids  = parties[0].heroes;
        this.updateHeroes()

      });
      this.allRaces_subscription = this.raceService.getRaces().subscribe((races)=>{
        this.allRaces = races.map((r)=>r.race).sort();       
      })
  }

  drop(event: CdkDragDrop<Hero[]>) {
    moveItemInArray(this.party.heroes, event.previousIndex, event.currentIndex);
    moveItemInArray(this.heroes, event.previousIndex, event.currentIndex);
    this.partyService
    .updateParty(this.party)
    .subscribe(() => this.ngOnInit()); 

  }

  up(pos : number){
    console.log(pos)
    if ( pos !== 0){
      this.party.heroes = this.arraymoveup(this.party.heroes, pos)
      this.heroes = this.arraymoveup(this.heroes, pos)
      this.partyService
      .updateParty(this.party)
      .subscribe(() => this.ngOnInit()); 
    }
  }


  livingHeroes() {
    return this.heroes.filter((h)=>!h.dead)
  }

  updateHeroes() {
    this.heroes_subscription = this.heroService
    .getHeroes(this.hero_ids)
    .subscribe((heroes) => {
      this.heroes = heroes.sort((a,b )=>this.hero_ids.indexOf(a.id!)-this.hero_ids.indexOf(b.id!))
      var lHeroes =  this.livingHeroes()
      this.nk =  lHeroes.reduce(
        (sum, current) => sum + current.closeCombat,
        0
      );
      this.nku =  lHeroes.reduce(
        (sum, current) => sum + current.closeCombatBonusUndead,
        0
      );
      this.nko =  lHeroes.reduce(
        (sum, current) => sum + current.closeCombatBonusOutdoor,
        0
      );
      this.nkm =  lHeroes.reduce(
        (sum, current) => sum + current.closeCombatMagic,
        0
      );
      this.fk =  lHeroes.reduce(
        (sum, current) => sum + current.rangeCombat,
        0
      );
      this.fku =  lHeroes.reduce(
        (sum, current) => sum + current.rangeCombatBonusUndead,
        0
      );
      this.fko =  lHeroes.reduce(
        (sum, current) => sum + current.rangeCombatBonusOutdoor,
        0
      );
      this.fkm =  lHeroes.reduce(
        (sum, current) => sum + current.rangeCombatMagic,
        0
      );
      
      this.nfk = lHeroes.reduce(
        (sum, current) =>
          sum + Math.max(current.rangeCombat, current.closeCombat),
        0
      );

      this.nfkm = lHeroes.reduce(
        (sum, current) =>
          sum + Math.max(current.rangeCombatMagic, current.closeCombatMagic),
        0
      );

      this.nfku = lHeroes.reduce(
        (sum, current) =>
          sum + Math.max(current.rangeCombat+current.rangeCombatBonusUndead,
            current.closeCombat+current.closeCombatBonusUndead),
        0
      );
      this.nfko = lHeroes.reduce(
        (sum, current) =>
          sum + Math.max(current.rangeCombat+current.rangeCombatBonusOutdoor,
            current.closeCombat+ current.closeCombatBonusOutdoor),
        0
      );

      this.nfkou = lHeroes.reduce(
        (sum, current) =>
          sum + Math.max(current.rangeCombat+current.rangeCombatBonusUndead+current.rangeCombatBonusOutdoor,
            current.closeCombat+current.closeCombatBonusUndead+current.closeCombatBonusOutdoor),
        0
      );

    });
  }


  setHero(hero: Hero) {
   this.heroService.updateHero(hero).subscribe(() => this.updateHeroes() );
   
  }



  toggleDead(hero: Hero){
    if (!hero.id){return}
    hero.dead = !hero.dead
    this.setHero(hero)
  }

  setPlayer(value: String): void {
    if (this.party && this.party.id) {
      this.party.player = value;
      this.partyService
        .updateParty(this.party)
        .subscribe(() => this.ngOnInit());
    }
  }

  setQuest1(value: String): void {
    if (this.party && this.party.id) {
      this.party.quest1 = value;
      this.partyService
        .updateParty(this.party)
        .subscribe(() => this.ngOnInit());
    }
  }

  setQuest2(value: String): void {
    if (this.party && this.party.id) {
      this.party.quest2 = value;
      this.partyService
        .updateParty(this.party)
        .subscribe(() => this.ngOnInit());
    }
  }

  setQuest3(value: String): void {
    if (this.party && this.party.id) {
      this.party.quest3 = value;
      this.partyService
        .updateParty(this.party)
        .subscribe(() => this.ngOnInit());
    }
  }

  setFame(value: String): void {
    if (this.party && this.party.id) {
      this.party.fame = value;
      this.partyService
        .updateParty(this.party)
        .subscribe(() => this.ngOnInit());
    }
  }

  setHonor(value: String): void {
    if (this.party && this.party.id) {
      this.party.honor = value;
      this.partyService
        .updateParty(this.party)
        .subscribe(() => this.ngOnInit());
    }
  }

  setLocation(value: String): void {
    if (this.party && this.party.id) {
      this.party.location = value;
      this.partyService
        .updateParty(this.party)
        .subscribe(() => this.ngOnInit());
    }
  }

  onToggleParty(): void {
    this.showNewHeroValue = !this.showNewHeroValue;
  }

  onSubmitNewHero() {
    this.showNewHeroValue = false;
    const sub = this.raceService.getRace(this.raceValue).subscribe((r) => {
      if (!(r.length === 0)) {
        var race: Race = r[0];
        var hero: Hero = this.heroService.newEmptyHero();
        hero.race = race.race;
        hero.equipment = race.equip.map(()=>"/")
        this.heroService.createHero(hero).subscribe((herowID) => {
          if (herowID.id) {
            this.party.heroes.push(herowID.id);
            this.partyService
              .updateParty(this.party)
              .subscribe(() => this.ngOnInit());
          }
        });
      }
      this.raceValue = '';
    });
  }


  arraymoveup(arr : any[], fromIndex: number) {
    return arr.slice(0, fromIndex-1).concat(arr[fromIndex],arr[fromIndex-1],arr.slice(fromIndex+1))

}
}
