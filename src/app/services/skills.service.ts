import { Observable } from 'rxjs';
import { skillsInterface } from './../interfaces/skills.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

url : string = 'http://localhost:8080/skill/';

  constructor(private http: HttpClient) { }

addSkill(id: number,skill: skillsInterface):Observable<skillsInterface[]>{

  return this.http.post<skillsInterface[]>(this.url + `add/${id}`, skill);
};

showSkill(id: number):Observable<skillsInterface[]>{

return this.http.get<skillsInterface[]>(this.url + `show/${id}`);

}

deleteSkill(id: number):Observable<skillsInterface>{

  return this.http.delete<skillsInterface>(this.url + `delete/${id}`)
}

}
