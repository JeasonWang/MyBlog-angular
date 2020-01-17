import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ArticleList, CategoryList } from '../domain/backdata';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ForeBaseService {

  private articleListLastestUrl = 'apidata/api/article/list/lastest';
  private categoryListUrl = 'apidata/api/category/list';
  private articleListUrl = 'apidata/api/article/list';
  private articleLisSortUrl = 'apidata/api/article/list/sort';

  constructor(
    private http: HttpClient) { }

  getLastestArticle(): Observable<ArticleList[]> {
    return this.http.get<ArticleList[]>(this.articleListLastestUrl)
      .pipe(
        catchError(this.handleError<ArticleList[]>('getHeroes', []))
      );
  }
  getArticleList(): Observable<ArticleList[]> {
    return this.http.get<ArticleList[]>(this.articleListUrl)
      .pipe(
        catchError(this.handleError<ArticleList[]>('getHeroes', []))
      );
  }

  getArticleListSort(): Observable<ArticleList[]> {
    return this.http.get<ArticleList[]>(this.articleLisSortUrl)
      .pipe(
        catchError(this.handleError<ArticleList[]>('getHeroes', []))
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
