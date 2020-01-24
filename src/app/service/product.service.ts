import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse }    from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Contact } from '../contact';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  contact: Contact[];
  errorData: {};
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http:HttpClient) { }

  getdata(){
    return this.http.get<Contact[]>('http://localhost/astutedatabase/list.php');
  }

  adddata(contact: Contact){
    return this.http.post('http://localhost/astutedatabase/insert.php', contact);
  }




  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.

      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.

      // The response body may contain clues as to what went wrong.

      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message

    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
  // editdata(post){
  //   return this.http.put(this.client, post);
  // }
}
