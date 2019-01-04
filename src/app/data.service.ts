import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Locationdetails} from './locationdetails';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  private locationDetailsURL = 'http://localhost:9090/jerseyService-0.0.1-SNAPSHOT/api/getAllItems';
  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
  getCgLocationDetails(): Observable<Locationdetails[]> {
    return this.http.get<Locationdetails[]>(this.locationDetailsURL);
  }
}
