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
  fechaInicio: [''],
  fechaFin: [''],
  descripcion: ['']
})

editEduForm = this.fb.group({
  imagen: [''],
  titulo: [''],
  fechaInicio: [''],
  fechaFin: [''],
  descripcion: ['']
})


editData:any = {};

Id : number = Number(sessionStorage.getItem('id'));
editar:boolean = (sessionStorage.getItem('editar') == 'edit');
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

    this.EduSer.addEdu(this.Id,this.newEduForm.value).subscribe(data=>{
      this.educacion = data;
    });
   this.newEduModal.hide();
  }

  openEditEdu(edu : any){
    this.editEduModal.show();
    this.editId = edu.id
    this.editData = edu;
    this.editEduForm.patchValue({
      imagen: edu.imagen,
      titulo: edu.titulo,
      fechaInicio: edu.fechaInicio,
      fechaFin: edu.fechaFin,
      descripcion: edu.descripcion
    })

  }

  editEdu(form:any){

    this.EduSer.editEdu(this.editId,form.value).subscribe(data=>{
      this.educacion = data;
    });
    this.editEduModal.hide();

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
