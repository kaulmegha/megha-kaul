import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Contact} from '../../models/contact';
import {FormspreeResponse} from '../../models/response/formspree.response';
import {ContactService} from './contact.service';
import {IpInfoResponse} from '../../responses/ip-info.response';
import {Injectable} from '@angular/core';

@Injectable()
export class BackendContactService implements ContactService {

  ServerUrl = 'https://formspree.io/xnqbwlrb';
  errorData: {};

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  contactForm(formdata: Contact): Observable<FormspreeResponse> {
    return this.http.post<FormspreeResponse>(this.ServerUrl, formdata, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getClientInfo(): Observable<any> {
    // const ipServiceURL = 'http://ip-api.com/json';
    const ipServiceURL = 'https://ipinfo.io/json?token=003bc8fb72c569';
    return this.http.get<IpInfoResponse>(ipServiceURL).pipe(
      // map(response => IpInfoConverter.convert(response))
    );
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
}
