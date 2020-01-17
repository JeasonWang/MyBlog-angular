import { Injectable } from '@angular/core';
import { User } from '../domain/user';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  url = 'apidata/admin/user';

  constructor(private http: HttpClient) { }


  /** GET Users from the server */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
    .pipe(
      catchError(this.handleError<User[]>('getUsers', []))
    );
  }

  /** GET user by id. Will 404 if id not found */
  getUser(id: number): Observable<User> {
    const url = `${this.url}/${id}`;
    return this.http.get<User>(url).pipe(
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  /** PUT: update the user on the server */
  updateUser(user: User): Observable<any> {
    return this.http.put(this.url, user, httpOptions).pipe(
      catchError(this.handleError<any>('updateUser'))
    );
  }

  checkUser(user: User): Observable<any> {
    return this.http.put(this.url, user, httpOptions).pipe(
      catchError(this.handleError<any>('login'))
    );
  }

  /** POST: add a new user to the server */
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user, httpOptions).pipe(
      catchError(this.handleError<User>('addUser'))
    );
  }


  /** DELETE: delete the user from the server */
  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<User>(url, httpOptions).pipe(
      catchError(this.handleError<User>('deleteUser'))
    );
  }

    /* GET Users whose name contains search term */
  searchUsers(term: string): Observable<User[]> {
    if (!term.trim()) {
      // if not search term, return empty user array.
      return of([]);
    }
    return this.http.get<User[]>(`${this.url}/?username=${term}`).pipe(
      catchError(this.handleError<User[]>('searchUsers', []))
    );
  }




  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
