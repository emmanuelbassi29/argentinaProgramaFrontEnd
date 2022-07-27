import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userInterface } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

   url = 'https://cvcool.herokuapp.com/';


  constructor(private http: HttpClient) { }

  addUser(user : object):Observable<object[]> {

   return this.http.post<userInterface[]>(this.url,user);


  }
}
