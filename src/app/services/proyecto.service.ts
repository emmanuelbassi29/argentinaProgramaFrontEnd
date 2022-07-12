import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proyectoInterface } from '../interfaces/proyecto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  url = 'http://localhost:8080/proyecto/';

  constructor(private http: HttpClient) { }

 showProyecto(id : number): Observable<proyectoInterface[]>{

  return this.http.get<proyectoInterface[]>(this.url + `show/${id}`)
}

addProyecto(id : number, pro : proyectoInterface): Observable<proyectoInterface[]>{

  return this.http.post<proyectoInterface[]>(this.url + `add/${id}`,pro)
}

editProyecto(id : number, pro : proyectoInterface): Observable<proyectoInterface[]>{

  return this.http.put<proyectoInterface[]>(this.url + `edit/${id}`,pro)
}

deleteProyecto(id: number): Observable<proyectoInterface>{

  return this.http.delete<proyectoInterface>(this.url + `delete/${id}`)
}
}
