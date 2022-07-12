import { timer } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { skillsInterface } from '../interfaces/skills.interface';
import { SkillsService } from '../services/skills.service';
declare var window: any;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  newSkillModal:any;
  deleteSkillModal:any;

  Id : number = Number(localStorage.getItem('id'));
  editar:boolean = (localStorage.getItem('editar') == 'edit');
  skills: any[] = [];
  editId: number = 0;

  newSkillForm = this.fb.group({
    titulo:[''],
    nivel:[0],
  })
  constructor(private fb: FormBuilder,private skillService: SkillsService) { }

  ngOnInit(): void {

     this.skillService.showSkill(this.Id).subscribe((data : skillsInterface[]) => {
        this.skills = data;
      });



    this.newSkillModal = new window.bootstrap.Modal(
      document.getElementById('newSkillModal'));



  this.deleteSkillModal = new window.bootstrap.Modal(
    document.getElementById('deleteSkillModal'))
  }

  openskillsNew(){
    this.newSkillModal.show();
  }

  newSkillSubmit(){
    this.skillService.addSkill(this.Id,this.newSkillForm.value).subscribe(data =>{
      this.skills = data;
    })

this.newSkillModal.hide();
  }

  openSkillsDelete(ski:any){
    this.editId = ski.id;
    this.deleteSkillModal.show();
  }

  deleteSkillSubmit(){
    this.skillService.deleteSkill(this.editId).subscribe(data => {})
    this.deleteSkillModal.hide();
  }

getNumber( n : any):number {
  return n;
}

}
