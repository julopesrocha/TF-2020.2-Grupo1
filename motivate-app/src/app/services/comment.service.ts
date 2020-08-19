import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

    apiURL: string = 'http://localhost:8000/api/'

  constructor(public http:HttpClient) { }

  httpHeaders: any ={
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'

    }
  }

 postComment(form, recipe_id): Observable<any>{
     this.httpHeaders.headers['Authorization'] = "Bearer " + localStorage.getItem('userToken');
     return this.http.post(this.apiURL + 'postComment/'+ recipe_id, form, this.httpHeaders);
 }

 deleteComment(id):Observable<any>{
     this.httpHeaders.headers['Authorization'] = "Bearer " + localStorage.getItem('userToken');
     return this.http.delete(this.apiURL + 'deleteComment/' + id, this.httpHeaders);
 }

 listComments(recipe_id):Observable<any>{
       return this.http.get(this.apiURL + 'listComments/'+ recipe_id);
}

}
