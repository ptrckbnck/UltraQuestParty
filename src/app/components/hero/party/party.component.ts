import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Hero } from 'src/app/Hero';
import { Party } from 'src/app/Party';
import { Race } from 'src/app/Race';
import { HeroService } from 'src/app/services/hero.service';
import { PartyService } from 'src/app/services/party.service';
import { RaceService } from 'src/app/services/race.service';

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
  heroes_subscription?: Subscription;
  party_subscription?: Subscription;
  nk: number = 0;
  fk: number = 0;
  nfk: number = 0;
  showNewHeroValue: boolean = false;
  raceValue: String = '';

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
            this.heroes = heroes;

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

  setHero(hero: Hero) {
    this.heroService.updateHero(hero).subscribe(() => this.ngOnInit());
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
}
