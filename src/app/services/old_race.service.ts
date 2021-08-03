import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { first } from 'rxjs/operators';
import { Ability } from '../Ability';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class RaceService {
  private apiUrl = 'http://localhost:5000/race'
  constructor(private http:HttpClient) { }

  getAbility(race: String, ability: String): Observable<Ability[]>{
    const url = `${this.apiUrl}?race=${race}&ability=${ability}`;
    return this.http.get<Ability[]>(url);
  }

}
