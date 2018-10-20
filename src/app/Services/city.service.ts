import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {City} from '../Models/city.model';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http:HttpClient) { }

  getCities():Observable<City[]>
  {
      return this.http.get<City[]>('http://localhost:10694/api/city');
  }

  getCitiesByState(id:number):Observable<City[]>
  {
    return this.http.get<City[]>('http://localhost:10694/api/city/'+id);
  }

  AddCity(city:City):Observable<string>
  {
     return this.http.post<string>('http://localhost:10694/api/city',city)
  }

  UpdateCity(id:number,city:City):Observable<string>
  {
     return this.http.put<string>('http://localhost:10694/api/city/'+id,city)
  }

  DeleteCity(id:number):Observable<any>
  {
     return this.http.delete<any>('http://localhost:10694/api/city/'+id)
  }
}
