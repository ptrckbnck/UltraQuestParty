import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../Hero';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private apiUrl = 'http://localhost:5000/hero'
  constructor(private http:HttpClient) { 
  }

  getHero(): Observable<Hero> {
    const url = `${this.apiUrl}/1`;
    return this.http.get<Hero>(url)
  }

  getHeroes(heroes : number[]): Observable<Hero[]> {
    const out = heroes.map((i)=>"id="+String(i)).join("&");
    const url = `${this.apiUrl}?${out}`;
    console.log(url);
    return this.http.get<Hero[]>(url)
  }

  updateHero(hero: Hero): Observable<Hero> {
    const url = `${this.apiUrl}/${hero.id}`;
    console.log(url);
    return this.http.put<Hero>(url, hero, httpOptions)
  }

  createHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.apiUrl, hero, httpOptions)
  }

  newEmptyHero(): Hero {
    return {
      race: "",
      name: "",
      profession: "",
      closeCombat: -1,
      rangeCombat: -1,
      armor: 0,
      skill1 : "",
      skill2 : "",
      skill3 : "",
      skill4 : "",
      movement : 0,
      strength : 0,
      dexterity : 0,
      intelligence : 0,
      equipment : [],
      armorItem : "",
      horse: ""
  }
    
  }
  
}


