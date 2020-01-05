import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ArticleListLatest, CategoryList } from '../domain/backdata';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ForeBaseService {

  private articleListLastestUrl = 'http://localhost:8080/api/article/list/lastest';
  private categoryListUrl = 'http://localhost:8080/api/category/list';

  constructor(
    private http: HttpClient) { }

  getLastestArticle(): Observable<ArticleListLatest[]> {
    return this.http.get<ArticleListLatest[]>(this.articleListLastestUrl)
      .pipe(
        catchError(this.handleError<ArticleListLatest[]>('getHeroes', []))
      );
  }

  getCategoryList(): Observable<CategoryList[]> {
    return this.http.get<CategoryList[]>(this.categoryListUrl)
      .pipe(
        catchError(this.handleError<CategoryList[]>('getHeroes', []))
      );
  }



  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
