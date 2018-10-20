import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {State} from '../Models/state.model';
import { Observable } from '../../../node_modules/rxjs';
import { promise } from 'protractor';

@Injectable()
export class CommonService {

  constructor(private client:HttpClient) { }

  GetStatesByPromise():Promise<State[]>
  {
   return this.client.get<State[]>('http://localhost:10694/api/state').toPromise();
  }

  GetStates():Observable<State[]>
  {
   return this.client.get<State[]>('http://localhost:10694/api/state');
  }

  AddState(state:State):Observable<string>
  {
     return this.client.post<string>('http://localhost:10694/api/state',state)
  }

  UpdateState(id:number,state:State):Observable<string>
  {
     return this.client.put<string>('http://localhost:10694/api/state/'+id,state)
  }

  DeleteState(id:number):Observable<any>
  {
     return this.client.delete<any>('http://localhost:10694/api/state/'+id)
  }

 
}
