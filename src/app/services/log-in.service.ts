import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userInterface } from '../interfaces/user.interface';
import { logInInterface } from '../interfaces/logIn.inteface';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

url: string = 'https://cvcool.herokuapp.com/'

  constructor(private http: HttpClient) { }


  getUser(info: logInInterface): Observable<number>{


  return  this.http.get<number>(this.url +`check/${info.mail}/${info.password}`)

   }



  buscarUser(mail : any) : Observable<number>{


    return  this.http.get<number>(this.url +`buscar/user/${mail.mail}`)

     }
  }


