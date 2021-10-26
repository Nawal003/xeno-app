import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import { ConnexionService } from '../services/connexion.service';

@Injectable()
export class Auth401Interceptor implements HttpInterceptor {

  constructor(private connec: ConnexionService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        //filtre sur la requete qu'on reçoit pour extraire les données si une erreur s'est produite
        catchError(
          faute => {
            if (faute instanceof HttpErrorResponse && faute.status == 401) {
              this.connec.token= '';
              this.connec.connection=0
            }
            return Observable.throw(faute)
          }
        )
      )
  }
}
