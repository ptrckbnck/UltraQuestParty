import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Race } from '../Race';


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

  getRaces(): Observable<Race[]> {
    return this.http.get<Race[]>(this.apiUrl)
  }

  deleteRace(race: Race): Observable<Race> {
    const url = `${this.apiUrl}/${race.id}`;
    return this.http.delete<Race>(url)
  }

  updateRace(race: Race): Observable<Race> {
    const url = `${this.apiUrl}/${race.id}`;
    return this.http.put<Race>(url, race, httpOptions)
  }

  addRace(race: Race): Observable<Race> {
    return this.http.post<Race>(this.apiUrl, race, httpOptions)
  }

  getRace(race: String): Observable<Race[]>{
    const url = `${this.apiUrl}?race=${race}`;
    return this.http.get<Race[]>(url);
  }


}