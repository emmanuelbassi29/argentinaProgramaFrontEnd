import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { acercaDeInterface } from '../interfaces/acercaDe.interface';
import { userInterface } from '../interfaces/user.interface';
import { AcercaService } from '../services/acerca.service';

declare var window: any;

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.scss']
})
export class AcercaComponent implements OnInit {

 acercaDe! : acercaDeInterface;
 usuario!:userInterface;
 @Input()Id : number = 0;
 @Input()editar!:boolean;
 formModal: any;
 acercaDeModal:any;

 editForm = this.fb.group({
  nombre: [''],
  profesion: [''],
  mail:[''],
  password: ['']
  })

  acercaDeForm = this.fb.group({
    banner: [''],
    photo: [''],
    descripcion: ['']
  })

  constructor(private acercaS : AcercaService,private activated: ActivatedRoute,
    private fb : FormBuilder) { }

  ngOnInit(): void {

  this.acercaS.getUser(this.Id).subscribe((user) => {
    this.usuario = user;
  })

  this.acercaS.getAcercaDe(this.Id).subscribe((data) => {
    this.acercaDe = data;
  })



  this.formModal = new window.bootstrap.Modal(
    document.getElementById('myModal')
  );

  this.acercaDeModal = new window.bootstrap.Modal(
    document.getElementById('acercaDeModal')

  )
}




  // MODAL FUNCTIONS

  // Perfil Modal
  openAcercaDeModal(){
    this.acercaDeModal.show();
}
saveAcercaDe(id: number, acerca: acercaDeInterface){
  this.acercaS.editarAcercaDe(this.Id,acerca).subscribe(data => {
    this.acercaDe = data;
})
}

acercaDeSubmit(){
this.saveAcercaDe(this.Id,this.acercaDeForm.value)
this.acercaDeModal.hide();

}
  // Usuario modal
openFormModal() {
  this.formModal.show();
}
saveUser(id: number,user : userInterface) {
this.acercaS.editarUser(this.Id,user).subscribe(data => {
  this.usuario = data;
})
}

onSubmit() {
 this.saveUser(this.Id,this.editForm.value);
  this.formModal.hide();
}

}




