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
    heroesDead: [],
    quest1: '',
    quest2: '',
    quest3: '',
    fame: '',
    honor: '',
    location: '',
  };
  heroes: Hero[] = [];
  heroes_subscription?: Subscription;
  party_subscription?: Subscription;
  nk: number = 0;
  fk: number = 0;
  nfk: number = 0;
  showNewHeroValue: boolean = false;
  raceValue: String = '';
  faSkull = faSkull;

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
        var h = parties[0].heroes;
        this.heroes_subscription = this.heroService
          .getHeroes(h)
          .subscribe((heroes) => {
            this.heroes = heroes.sort((a,b )=>h.indexOf(a.id!)-h.indexOf(b.id!))
            this.nk = heroes.reduce(
              (sum, current) => sum + current.closeCombat,
              0
            );
            this.fk = heroes.reduce(
              (sum, current) => sum + current.rangeCombat,
              0
            );
            this.nfk = heroes.reduce(
              (sum, current) =>
                sum + Math.max(current.rangeCombat, current.closeCombat),
              0
            );
          });
      });
  }

  setHero(hero: Hero, i : number) {
   //this.heroService.updateHero(hero).subscribe(() => this.ngOnInit());
   this.heroService.updateHero(hero).subscribe();
   console.log(hero);
   console.log(this.heroes[i]);
  }

  isDead(hero: Hero){
    if (!hero.id){return}
    const set = new Set(this.party.heroesDead)
    if (set.has(hero.id)){
      return true;
    }return false;
  }

  toggleDead(hero: Hero){
    if (!hero.id){return}
    const set = new Set(this.party.heroesDead)
    if (set.has(hero.id)){
      set.delete(hero.id)
    } else {
      set.add(hero.id);
    }
    this.party.heroesDead= Array.from(set);
    this.partyService
    .updateParty(this.party)
    .subscribe(() => this.ngOnInit());
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

  arraymoveup(arr : any[], fromIndex: number) {
    return arr.slice(0, fromIndex-1).concat(arr[fromIndex],arr[fromIndex-1],arr.slice(fromIndex+1))

}
}
