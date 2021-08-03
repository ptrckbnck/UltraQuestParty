import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Party } from '../Party';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class PartyService {
  private apiUrl = 'http://localhost:5000/party'
  constructor(private http:HttpClient) { 
  }

  getParty(name : String): Observable<Party[]> {
    const url = `${this.apiUrl}?name=${name}`;
    console.log(url);
    return this.http.get<Party[]>(url)
  }

  updateParty(party: Party): Observable<Party> {
    const url = `${this.apiUrl}/${party.id}`;
    console.log(url);
    return this.http.put<Party>(url, party, httpOptions)
  }

  createParty(party: Party): Observable<Party> {
    return this.http.post<Party>(this.apiUrl, party, httpOptions)
  }
}


