import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProyectoService } from '../services/proyecto.service';
declare var window: any;

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  newProyectoModal:any;
  editProyectoModal:any;
  deleteProyectoModal:any;

  Id : number = Number(sessionStorage.getItem('id'));
  editar:boolean = (sessionStorage.getItem('editar') == 'edit');
  proyectos: any[] = [];
  editId: number = 0;

  newProyectoForm = this.fb.group({
    titulo: [''],
    imagen: [''],
    descripcion: ['']

  })
  constructor(private fb: FormBuilder,private proService: ProyectoService) { }

  ngOnInit(): void {

    this.proService.showProyecto(this.Id).subscribe(data =>{
    this.proyectos = data;

    this.newProyectoModal = new window.bootstrap.Modal(
      document.getElementById('newProyectoModal'));

  this.editProyectoModal = new window.bootstrap.Modal(
    document.getElementById('editProyectoModal'))

  this.deleteProyectoModal = new window.bootstrap.Modal(
    document.getElementById('deleteProyectoModal'))

    })

  }
  openNewProyecto() {
    this.newProyectoModal.show();
  }

  newProyecto(){

    this.proService.addProyecto(this.Id,this.newProyectoForm.value).subscribe(data=>{
      this.proyectos = data;
    });
   this.newProyectoModal.hide();
  }

  openEditProyecto(pro : any){
    this.editProyectoModal.show();
    this.editId = pro.id
    console.log(this.editId)
  }

  editProyecto(){

    this.proService.editProyecto(this.editId,this.newProyectoForm.value).subscribe(data=>{
      this.proyectos = data;
      this.editProyectoModal.hide();

    });

  }

  openDeleteProyecto(pro : any){
    this.editId = pro.id;
    this.deleteProyectoModal.show();
  }

  deleteProyecto(){
    this.proService.deleteProyecto(this.editId).subscribe(data=>{})
    this.proyectos = this.proyectos.filter(proyectos => proyectos.id !== this.editId)
    this.deleteProyectoModal.hide();
  }
}
