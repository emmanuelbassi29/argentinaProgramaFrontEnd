import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { educacionInterface } from '../interfaces/educacion.interface';
import { EducacionService } from '../services/educacion.service';
declare var window: any;

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {

newEduModal: any;
editEduModal:any;
deleteEduModal:any;

newEduForm = this.fb.group({
  imagen: [''],
  titulo: [''],
  fechaI: [''],
  fechaF: [''],
  descripcion: ['']
})

editEduForm = this.fb.group({
  imagen: [''],
  titulo: [''],
  fechaI: [''],
  fechaF: [''],
  descripcion: ['']
})

deleteEduForm = this.fb.group({})

editData:any = {
  imagen: '',
  titulo: '',
  fechaI: '',
  fechaF: '',
  descripcion: ''
}
Id : number = Number(localStorage.getItem('id'));
editar:boolean = (localStorage.getItem('editar') === 'true');
educacion: educacionInterface[] = [];
editId: number = 0;

  constructor(private fb: FormBuilder, private EduSer : EducacionService) { }

  ngOnInit(): void {

    this.EduSer.getEdu(this.Id).subscribe(data => {
      this.educacion = data;
    })


    this.newEduModal = new window.bootstrap.Modal(
      document.getElementById('newEduModal'));

  this.editEduModal = new window.bootstrap.Modal(
    document.getElementById('editEduModal'))

  this.deleteEduModal = new window.bootstrap.Modal(
    document.getElementById('deleteEduModal'))
  }

  openNewEdu() {
    this.newEduModal.show();
  }

  newEdu(){

    this.EduSer.addEdu(this.Id,this.newEduForm.value).subscribe(data=>{});
   this.newEduModal.hide();
  }

  openEditEdu(edu : any){
    this.editEduModal.show();
    this.editId = edu.id
    console.log(this.editId)
  }

  editEdu(){

    this.EduSer.editEdu(this.editId,this.newEduForm.value).subscribe(data=>{});

  }

  openDeleteEdu(edu : any){
    this.editId = edu.id;
    this.deleteEduModal.show();
  }

  deleteEdu(){
    this.EduSer.deleteEdu(this.editId).subscribe(data=>{})
    this.deleteEduModal.hide();
  }
}
