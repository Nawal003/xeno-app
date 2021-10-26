import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConnexionService } from '../services/connexion.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  entetes: any;

  constructor(private connec: ConnexionService) { }


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //on verifie qu'un token existe, si existe on génère un nouvel entete
    console.log("requete interceptée", request);
    
    if (this.connec.token) {
      this.entetes = {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + this.connec.token
        })
      }
      const authReq = request.clone(this.entetes);
      return next.handle(authReq)
    } else {
      //on renvoie la requête d'origine
      return next.handle(request);
    }
  }
}
