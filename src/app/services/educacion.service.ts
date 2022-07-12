import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { educacionInterface } from '../interfaces/educacion.interface';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url = 'http://localhost:8080/educacion/'
  constructor(private http: HttpClient) { }

  getEdu(id: number): Observable<educacionInterface[]>{

    return this.http.get<educacionInterface[]>(this.url + `show/${id}`)
  }

  addEdu(id: number, edu : educacionInterface): Observable<educacionInterface[]>{

    return this.http.post<educacionInterface[]>(this.url + `add/${id}`, edu);
  }

  editEdu(id: number, edu :educacionInterface): Observable<educacionInterface[]>{

    return this.http.put<educacionInterface[]>(this.url + `edit/${id}`, edu);
  }

  deleteEdu(id: number): Observable<educacionInterface>{

    return this.http.delete<educacionInterface>(this.url + `delete/${id}`);
  }
}
