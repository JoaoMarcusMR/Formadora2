import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) { }

  // BUSCAR RECEITAS BRASILEIRAS
  getBrazilianMeals(): Observable<any> {
    return this.http.get(`${this.apiUrl}/filter.php?a=Brazilian`);
  }

  // BUSCAR RECEITAS PORTUGUESAS
  getPortugueseMeals(): Observable<any> {
    return this.http.get(`${this.apiUrl}/filter.php?a=Portuguese`);
  }

  // BUSCAR RECEITAS ITALIANAS
  getItalianMeals(): Observable<any> {
    return this.http.get(`${this.apiUrl}/filter.php?a=Italian`);
  }

  // BUSCAR RECEITAS MEXICANAS
  getMexicanMeals(): Observable<any> {
    return this.http.get(`${this.apiUrl}/filter.php?a=Mexican`);
  }

  // BUSCAR DETALHES DA RECEITA POR ID
  getMealById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/lookup.php?i=${id}`);
  }

  // BUSCAR RECEITA ALEATÓRIA
  getRandomMeal(): Observable<any> {
    return this.http.get(`${this.apiUrl}/random.php`);
  }
}