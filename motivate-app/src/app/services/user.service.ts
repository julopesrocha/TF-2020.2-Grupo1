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


  public showUser(user_id): Observable<any>{
    return this.http.get(this.apiUrl + 'getUserProfile/' + user_id);
  }

  public updateUser(form): Observable<any>{
    this.httpHeaders.headers['Authorization'] = "Bearer " + localStorage.getItem('userToken');
    return this.http.put(this.apiUrl + 'editUserProfile', form, this.httpHeaders);
  }

 // // public listFollowers(): Observable <any>{
 //     return this.http.get(this.apiUrl + 'getFollowers');
 //   }
 //
 //  public listFollowing(): Observable <any>{
 //     return this.http.get(this.apiUrl + 'getFollowing');
 //   }
 //
    public followUser(user_id): Observable <any>{
        this.httpHeaders.headers['Authorization'] = "Bearer " + localStorage.getItem('userToken');
        return this.http.post(this.apiUrl + 'followUser/'+ user_id);
     }


    // seguir uma pessoa
    public follow(user_id): Observable <any> {
        this.httpHeaders.headers['Authorization'] = "Bearer " + localStorage.getItem('userToken');
        return this.http.post(this.apiUrl + 'followUser/' + user_id, null, this.httpHeaders);
    }

    // verifica se esta seguindo
    public verifyFollow(user_id): Observable <any> {
        this.httpHeaders.headers['Authorization'] = "Bearer " + localStorage.getItem('userToken');
        return this.http.get(this.apiUrl + 'isFollowing/' + user_id, this.httpHeaders);
    }


  // public deleteUser(user_id): Observable<any>{
  //   this.httpHeaders.headers['Authorization'] = "Bearer " + localStorage.getItem('userToken');
  //   return this.http.delete(this.apiUrl + 'deleteUser/' + user_id, this.httpHeaders);
  // }
  //
}
