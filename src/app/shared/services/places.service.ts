import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Place} from '../interfases';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(
    private http: HttpClient
  ) { }

  getPlaceById(id: string): Observable<Place> {
    return this.http.get<Place>(`${environment.mongoDbUrl}/places/${id}`);
  }
}
