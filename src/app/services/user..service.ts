import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userInterface } from '../interfaces/user.interface';
import { logInInterface } from '../interfaces/logIn.inteface';
import {Auth, createUserWithEmailAndPassword} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class UserService {

url: string = 'https://cvcool.herokuapp.com/'

  constructor(private http: HttpClient, private auth: Auth) { }


  getUser(info: logInInterface): Observable<number>{


  return  this.http.get<number>(this.url +`check/${info.mail}/${info.password}`)

   }

  buscarUser(mail : any) : Observable<number>{


    return  this.http.get<number>(this.url +`buscar/user/${mail.mail}`)

     }

     addUser(user : object):Observable<object[]> {

      return this.http.post<userInterface[]>(this.url + "register",user);

     }

    }


