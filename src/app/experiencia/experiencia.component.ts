import { experienciaInterface } from './../interfaces/experiencia.interface';
import { Component, Input, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ExperienciaService } from '../services/experiencia.service';
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

  newExpForm = this.fb.group({
    imagen: [''],
    titulo: [''],
    fechaI: [''],
    fechaF: [''],
    descripcion: ['']
  })

  editExpForm = this.fb.group({
    imagen: [''],
    titulo: [''],
    fechaI: [''],
    fechaF: [''],
    descripcion: ['']
  })

  constructor(private fb: FormBuilder, private expS: ExperienciaService) { }

  Id : number = Number(sessionStorage.getItem('id'));
  editar:boolean = (sessionStorage.getItem('editar') == 'edit');
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


     this.expS.getExp(this.Id).subscribe((data : experienciaInterface[]) => {
        this.experiencias = data;
      });


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

    this.expS.addExp(id,exp).subscribe(data => {
      this.experiencias = data;
    })
  }

  newSubmit(){

    this.newExperiencia(this.Id,this.newExpForm.value);
    this.newModal.hide();
  }

   //Editar experiencia
   openEdit(exp : experienciaInterface) {


  this.editId=exp.id;
  this.editModal.show();


  this.editExpForm.patchValue({

    imagen: exp.imagen,
    titulo: exp.titulo,
    fechaI: exp.fechaI,
    fechaF: exp.fechaF,
    descripcion: exp.descripcion
  });
}

   editSubmit(form : any){

   this.expS.editExp(this.editId,form.value).subscribe(data => {
    this.experiencias = data;

   })

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
    this.experiencias = this.experiencias.filter(experiencias => experiencias.id !== this.editId)
    this.deleteModal.hide();
  }


}
