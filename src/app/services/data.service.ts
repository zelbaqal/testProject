import { BadInput } from './../commun/interceptor/bad-input-error';
import { AppError } from './../commun/interceptor/app-error';

import { User } from './../user';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs'
import { NotFoundError } from '../commun/interceptor/not-found-error';
import { RequestError } from '../commun/interceptor/request-error';





export class DataService {

  constructor(private url:string ,private http : HttpClient) { }

  getAll = () =>this.http.get<User[]>(this.url)
                  
                  .pipe(
                    catchError(this.handleErrors));
                 

  create = ressource =>this.http.post<User>(this.url, ressource )
                      .pipe(
                        catchError(this.handleErrors));

  update = ressource => this.http.put<User>(this.url+ ressource.id, ressource)
                        .pipe(
                          catchError(this.handleErrors));

  delete = id => this.http.delete(this.url + id)
                          .pipe(
                            catchError(this.handleErrors));

  private handleErrors = (err: Response) => {
        if (err.status === 404) {
          return throwError(new NotFoundError);
        }

        if (err.status === 500) {
          return throwError(new RequestError);
        }

        if (err.status === 400) {
          return throwError(new BadInput);
        }
        return throwError(new AppError);

  }
                          
                          
    
  
 
 
  
                      
  
}
