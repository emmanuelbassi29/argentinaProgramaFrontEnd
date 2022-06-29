import { userInterface } from './../interfaces/user.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { acercaDeInterface } from '../interfaces/acercaDe.interface';
import { LogInService } from './log-in.service';

@Injectable({
  providedIn: 'root'
})
export class AcercaService {



  constructor(private http: HttpClient, private log : LogInService) { }

  getUser(id : number): Observable<userInterface>{


    return  this.http.get<userInterface>
      (`http://localhost:8080/holis/${id}`)

     }


  getAcercaDe(id: number): Observable<acercaDeInterface>{

    return this.http.get<acercaDeInterface>(`http://localhost:8080/descripcion/${id}`)

  }

}
