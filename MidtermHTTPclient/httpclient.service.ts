import { Injectable } from '@angular/core';
import { HttpclientService } from './httpclient.service';
@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(private http:HttpClient) { }
  getUsersRemotely (){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
