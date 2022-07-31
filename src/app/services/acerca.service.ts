import { userInterface } from './../interfaces/user.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { acercaDeInterface } from '../interfaces/acercaDe.interface';
import { UserService } from './user..service';

@Injectable({
  providedIn: 'root'
})
export class AcercaService {

  base: string = 'https://cvcool.herokuapp.com'


  constructor(private http: HttpClient, private userService : UserService) { }

  getUser(id : number): Observable<userInterface>{

    return  this.http.get<userInterface>(this.base +`/holis/${id}`)

     }


  getAcercaDe(id: number): Observable<acercaDeInterface>{

    return this.http.get<acercaDeInterface>(this.base +`/acercaDe/${id}`)

  }

  editarUser(id: number,newUser: userInterface): Observable<userInterface>{

    return this.http.put<userInterface>(this.base + `/editar/user/${id}`,newUser)
  }

  editarAcercaDe(id: number,newAcerca: acercaDeInterface): Observable<acercaDeInterface>{
    return this.http.put<acercaDeInterface>(this.base + `/editar/acercaDe/${id}`,newAcerca)
  }
}
