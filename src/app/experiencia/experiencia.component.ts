import { experienciaInterface } from './../interfaces/experiencia.interface';
import { Component, Input, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ExperienciaService } from '../services/experiencia.service';
import { ActivatedRoute, Params } from '@angular/router';
import { timer } from 'rxjs';
declare var window: any;

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {


  newModal:any;
  editModal:any;
  deleteModal:any;

  newForm = this.fb.group({
    imagen: [''],
    titulo: [''],
    fechaI: [''],
    fechaF: [''],
    descripcion: ['']
  })

  editForm = this.fb.group({
    imagen: [''],
    titulo: [''],
    fechaI: [''],
    fechaF: [''],
    descripcion: ['']
  })

  deleteForm = this.fb.group({})



  constructor(private fb: FormBuilder, private expS: ExperienciaService) { }

  Id : number = Number(localStorage.getItem('id'));
  editar:boolean = (localStorage.getItem('editar') == 'true');
  experiencias : experienciaInterface[] = []


  editData : any = {

    imagen: '',
    titulo: '',
    fechaI: '',
    fechaF: '',
    descripcion: ''
  };

  editId: number = 0;

  ngOnInit(): void {





     if(this.experiencias.length == 0){
      timer(1000,500).subscribe(() => {
     this.expS.getExp(this.Id).subscribe((data : experienciaInterface[]) => {
        this.experiencias = data;
      });
    })
  }

    this.newModal = new window.bootstrap.Modal(
      document.getElementById('newModal'));

  this.editModal = new window.bootstrap.Modal(
    document.getElementById('editModal'))

  this.deleteModal = new window.bootstrap.Modal(
    document.getElementById('deleteModal'))
  }


  //Nueva experiencia
  openNew() {
    this.newModal.show();
  }

  newExperiencia(id : number,exp:experienciaInterface){

    this.expS.addExp(id,exp).subscribe(data => {})
  }

  newSubmit(){

    this.newExperiencia(this.Id,this.newForm.value);
    this.newModal.hide();


  }

   //Editar experiencia
   openEdit(exp : experienciaInterface) {


  this.editId=exp.id;
  this.editModal.show();


  this.editData = {

    imagen: exp.imagen,
    titulo: exp.titulo,
    fechaI: exp.fechaI,
    fechaF: exp.fechaF,
    descripcion: exp.descripcion
  };

  this.newForm.patchValue(exp)
console.log(this.newForm.value);
}

   editExperiencia(){

   }

   editSubmit(){

  this.newForm.patchValue(this.editForm.value);

  console.log(this.newForm.value);
  console.log(this.editForm.value)
   this.expS.editExp(this.editId,this.newForm.value).subscribe(data => {})

    this.editModal.hide();

   }

    //Eliminar experiencia
  openDelete(exp : experienciaInterface) {
    this.editId=exp.id;
  this.deleteModal.show();
  }


  deleteExperiencia(){}

  deleteSubmit(){

    this.expS.deleteExp(this.editId).subscribe(data => {})
    this.deleteModal.hide();
  }






}
