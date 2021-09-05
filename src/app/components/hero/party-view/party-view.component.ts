import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Hero } from 'src/app/Hero';
import { Party } from 'src/app/Party';
import { faSkull } from '@fortawesome/free-solid-svg-icons';
import { RaceService } from 'src/app/services/race.service';
import { HeroService } from 'src/app/services/hero.service';
import { PartyService } from 'src/app/services/party.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-party-view',
  templateUrl: './party-view.component.html',
  styleUrls: ['./party-view.component.css']
})
export class PartyViewComponent implements OnInit {
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
}
