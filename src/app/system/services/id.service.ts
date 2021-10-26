import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IId } from '../models/iid'
import { UserI } from '../models/user-i';
import { ConnexionService } from './connexion.service';

@Injectable({
  providedIn: 'root'
})
export class IdService {
  id: IId = <IId>{}

  constructor(private http: HttpClient, private connec: ConnexionService) {

  }



  showMe() {
    console.log(this.id);

  }
  login(user: UserI) {
    this.http.get<IId>(`assets/datas/ids/${user.email}@${user.password}.json`).subscribe(data => {
      this.id = data
      
      if (data.token) this.connec.connection=data.grade as number
      console.log(this.id);

    },
      erreur => {
        console.log(erreur, "erreur");

      }
    )

  }

}
