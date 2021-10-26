import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  connection:number = 0;
  token: string=''

  constructor() { }
}
