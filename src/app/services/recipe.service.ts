import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'https://api.spoonacular.com/recipes';
  private apiKey = '36ff91910cc4441aa249e32ab7ac7813';

  constructor(private http: HttpClient) { }

  searchRecipes(query: string, cuisine?: string, diet?: string, intolerances?: string[]): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = new HttpParams()
      .set('apiKey', this.apiKey)
      .set('query', query);

    if (cuisine) {
      params = params.set('cuisine', cuisine);
    }

    if (diet) {
      params = params.set('diet', diet);
    }

    if (intolerances && intolerances.length > 0) {
      params = params.set('intolerances', intolerances.join(','));
    }

    return this.http.get<any>(`${this.apiUrl}/complexSearch`, { headers, params });
  }

  getRecipeById(id: number): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('apiKey', this.apiKey);

    return this.http.get<any>(`${this.apiUrl}/${id}/information`, { headers, params });
  }
}
