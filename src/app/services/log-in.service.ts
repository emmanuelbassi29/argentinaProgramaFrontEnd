import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userInterface } from '../interfaces/user.interface';
import { logInInterface } from '../interfaces/logIn.inteface';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor(private http: HttpClient) { }
edit!: boolean;


  getUser(info: logInInterface): Observable<number>{


  return  this.http.get<number>
    (`http://localhost:8080/check/${info.mail}/${info.password}`)

   }

   getEdit(): boolean {
    return this.edit;
  }

  }


