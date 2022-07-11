import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
declare var window: any;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  newSkillModal:any;
  editSkillModal:any;
  deleteSkillModal:any;

  Id : number = Number(localStorage.getItem('id'));
  editar:boolean = (localStorage.getItem('editar') == 'true');
  skills: any[] = [];
  editId: number = 0;

  newSkillForm = this.fb.group({
    titulo:[''],
    nivel:[0],
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  openskillsNew(){
    this.newSkillModal.show();
  }

  newSkillSubmit(){

this.newSkillModal.hide();
  }

  openSkillsDelete(ski:any){
    this.editId = ski.id;
    this.deleteSkillModal.show();
  }

  deleteSkillSubmit(){
    this.deleteSkillModal.hide();
  }


}
