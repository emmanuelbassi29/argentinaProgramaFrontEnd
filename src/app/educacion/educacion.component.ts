import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { educacionInterface } from '../interfaces/educacion.interface';
declare var window: any;

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {

newModal: any;
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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.newModal = new window.bootstrap.Modal(
      document.getElementById('newModal'));

  this.editModal = new window.bootstrap.Modal(
    document.getElementById('editModal'))

  this.deleteModal = new window.bootstrap.Modal(
    document.getElementById('deleteModal'))
  }

}
