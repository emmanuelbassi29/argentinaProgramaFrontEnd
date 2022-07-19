import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { socialInterface } from '../interfaces/social.interface';

@Injectable({
  providedIn: 'root'
})
export class SocialService {



  url: string = 'http://localhost:8080/social/'
  constructor(private http: HttpClient) { }

showSocial(id:number): Observable<socialInterface>{

  return this.http.get<socialInterface>(this.url + `show/${id}`)

}

editSocial(id:number, social :socialInterface) : Observable<socialInterface>{

  return this.http.put<socialInterface>(this.url + `edit/${id}`,social)
}

}
