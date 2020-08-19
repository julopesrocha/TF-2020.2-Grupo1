import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string ='http://localhost:8000/api/'

  constructor(public http: HttpClient) { }

  httpHeaders: any ={
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'    
    }
  }

  public updateUser(form): Observable<any>{
    this.httpHeaders.headers['Authorization'] = "Bearer " + localStorage.getItem('userToken');
    return this.http.put(this.apiUrl + 'editUserProfile', this.httpHeaders);
  }

  // public showUser(user_id): Observable<any>{
  //   return this.http.get(this.apiUrl + 'getUser/' + user_id);
  // }

  // public listSeguidores(user_id): Observable <any>{
  //   return this.http.get(this.apiUrl + 'getSeguidores/' + user_id);
  // }

  // public listSeguindo(user_id): Observable <any>{
  //   return this.http.get(this.apiUrl + 'getSeguindo/' + user_id);
  // }

  // public deleteUser(user_id): Observable<any>{
  //   this.httpHeaders.headers['Authorization'] = "Bearer " + localStorage.getItem('userToken');
  //   return this.http.delete(this.apiUrl + 'deleteUser/' + user_id, this.httpHeaders);
  // }
  
}
