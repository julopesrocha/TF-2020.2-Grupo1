import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

    apiURL: string = 'http://localhost:8000/api/'

  constructor(public http:HttpClient) { }

 // postComment(republic_id): Observable<any>{
    //  return this.http.post(this.apiURL + 'postComment/'+ republic_id);
 // }

 // deleteComment(id):Observable<any>{
//        return this.http.delete(this.apiURL + 'deleteComment/' + id);
//}

// listComments():Observable<any>{
//       return this.http.get(this.apiURL + 'listComments');
}
