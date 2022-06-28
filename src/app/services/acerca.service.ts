import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userInterface } from '../interfaces/user.interface';
import { acercaDeInterface } from '../interfaces/acercaDe.interface';

@Injectable({
  providedIn: 'root'
})
export class AcercaService {



  constructor(private http: HttpClient) { }


  getUser(id: number): Observable<userInterface>{

   return this.http.get<userInterface>(`http://localhost:8080/holis/${id}`)

  }
  getAcercaDe(id: number): Observable<acercaDeInterface>{

    return this.http.get<acercaDeInterface>(`http://localhost:8080/descripcion/${id}`)

  }

}
