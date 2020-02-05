import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ArticleList, CategoryList, SysLog, SysView, ArticleWithPictureDto, CategoryInfo, ArticleDto, Comment1, ArticleCommentDto } from '../domain/backdata';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BackBaseService {


  constructor(
    private http: HttpClient) { }

  listAllLog(): Observable<SysLog[]> {
    return this.http.get<SysLog[]>('apidata/admin/sys/log')
      .pipe(
        catchError(this.handleError<SysLog[]>('getlistAllLog', []))
      );
  }

  getlistAllView(): Observable<SysView[]> {
    return this.http.get<SysView[]>('apidata/admin/sys/view')
      .pipe(
        catchError(this.handleError<SysView[]>('getlistAllView', []))
      );
  }
  listAllArticleInfo(): Observable<ArticleWithPictureDto[]> {
    return this.http.get<ArticleWithPictureDto[]>('apidata/api/article/list')
      .pipe(
        catchError(this.handleError<ArticleWithPictureDto[]>('getlistAllArticleInfo', []))
      );
  }
  listArticleInfo(id: number): Observable<ArticleWithPictureDto[]> {
    return this.http.get<ArticleWithPictureDto[]>('apidata/api、article/list/sort/' + id)
      .pipe(
        catchError(this.handleError<ArticleWithPictureDto[]>('getlistAllArticleInfo', []))
      );
  }
  listLastestArticle(): Observable<ArticleWithPictureDto[]> {
    return this.http.get<ArticleWithPictureDto[]>('apidata/api/article/list/lastest')
      .pipe(
        catchError(this.handleError<ArticleWithPictureDto[]>('listLastestArticle', []))
      );
  }
  getArticleById(id: number): Observable<ArticleDto[]> {
    return this.http.get<ArticleDto[]>('apidata/api/article/' + id)
      .pipe(
        catchError(this.handleError<ArticleDto[]>('getArticleById', []))
      );
  }
  deleteArticle(id: number) {
    alert('apidata/admin/article/' + id);
    return this.http.delete('apidata/admin/article/' + id);
  }
  listAllCategoryInfo(): Observable<CategoryInfo[]> {
    return this.http.get<CategoryInfo[]>('apidata/api/category/list')
      .pipe(
        catchError(this.handleError<CategoryInfo[]>('listAllCategoryInfo', []))
      );
  }

  listAllComment(): Observable<Comment1[]> {
    return this.http.get<Comment1[]>('apidata/api/comment/list')
      .pipe(
        catchError(this.handleError<Comment1[]>('listAllComment', []))
      );
  }

  listMessageByArticleId(id: number): Observable<ArticleCommentDto[]> {
    return this.http.get<ArticleCommentDto[]>('apidata/api/comment/article/' + id)
      .pipe(
        catchError(this.handleError<ArticleCommentDto[]>('listMessageByArticleId', []))
      );
  }


  getCategoryInfo(id: number): Observable<CategoryInfo[]> {
    return this.http.get<CategoryInfo[]>('apidata/admin/category/' + id)
      .pipe(
        catchError(this.handleError<CategoryInfo[]>('getCategoryInfo', []))
      );
  }

  addCategory(categoryInfo: CategoryInfo): Observable<CategoryInfo> {
    return this.http.post<CategoryInfo>('apidata/admin/category', categoryInfo, httpOptions)
      .pipe(
        catchError(this.handleError<CategoryInfo>('addCategory'))
      );
  }

  modifyCategory(categoryInfo: CategoryInfo): Observable<CategoryInfo> {
    return this.http.put<CategoryInfo>('apidata/admin/category', categoryInfo, httpOptions)
      .pipe(
        catchError(this.handleError<CategoryInfo>('addCategory'))
      );
  }

  addArticle(articleDto: ArticleDto): Observable<ArticleDto> {
    return this.http.post<ArticleDto>('apidata/admin/article', articleDto, httpOptions)
      .pipe(
        catchError(this.handleError<ArticleDto>('addArticle'))
      );
  }

  replyComment(id: number): Observable<string> {
    return this.http.get<string>('apidata/admin/comment/reply/' + id)
      .pipe();
  }
  getCommentById(id: number): Observable<Comment1[]> {
    return this.http.get<Comment1[]>('apidata/admin/comment/reply/' + id)
      .pipe(
        catchError(this.handleError<Comment1[]>('getCommentById', []))
      );
  }
  getArticleDtoById(id: number): Observable<ArticleDto[]> {
    return this.http.get<ArticleDto[]>('apidata/admin/article/' + id)
      .pipe(
        catchError(this.handleError<ArticleDto[]>('getArticleDtoById', []))
      );
  }




















  getArticleList(): Observable<ArticleList[]> {
    return this.http.get<ArticleList[]>('apidata/api/article/list')
      .pipe(
        catchError(this.handleError<ArticleList[]>('getHeroes', []))
      );
  }

  getArticleListSort(): Observable<ArticleList[]> {
    return this.http.get<ArticleList[]>('apidata/api/article/list/sort')
      .pipe(
        catchError(this.handleError<ArticleList[]>('getHeroes', []))
      );
  }

  getCategoryList(): Observable<CategoryList[]> {
    return this.http.get<CategoryList[]>('apidata/api/category/list')
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
