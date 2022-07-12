import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experienciaInterface } from '../interfaces/experiencia.interface';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {


  url: string = 'http://localhost:8080/experiencia/'

  constructor(private http: HttpClient) { }

  addExp(id: number,exp:experienciaInterface):Observable<experienciaInterface[]> {

    return this.http.post<experienciaInterface[]>(this.url + `new/${id}`,exp)

  }

  getExp(id: number):Observable<experienciaInterface[]>{

    return this.http.get<experienciaInterface[]>(this.url + `show/${id}`)

  }

  editExp(id: number,exp:experienciaInterface):Observable<experienciaInterface[]>{

    return this.http.put<experienciaInterface[]>(this.url + `edit/${id}`,exp)
  }

  deleteExp(id: number):Observable<experienciaInterface> {

   return  this.http.delete<experienciaInterface>(this.url + `delete/${id}`)

  }

}
