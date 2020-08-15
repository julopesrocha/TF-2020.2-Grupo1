import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  apiUrl: string ='http://localhost:8000/api/'

  constructor(public http: HttpClient) {  }

    public createRecipe(challenge_id, form):Observable<any>{
      return this.http.post(this.apiUrl + 'postRecipe/' + challenge_id, form);
    }

    public showRecipe(recipe_id): Observable<any>{
      return this.http.get(this.apiUrl + 'getRecipe/')
    }

    public updateRecipe(recipe_id, form): Observable<any>{
      return this.http.put(this.apiUrl + 'updateRecipe/' + recipe_id, form);
    }

    public deleteRecipe(recipe_id): Observable<any>{
      return this.http.delete(this.apiUrl + 'deleteRecipe/' + recipe_id);
    }
 
}
