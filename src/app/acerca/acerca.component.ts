import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

 acercaDe : acercaDeInterface = {
  descripcion: '',
  photo: '',
  banner: ''

 }
 usuario: userInterface = {
  nombre: '',
  profesion:''
 }

 Id : number = Number(sessionStorage.getItem('id'));
 editar:boolean = (sessionStorage.getItem('editar') == 'edit');
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

    this.acercaDeForm.patchValue({
    banner: this.acercaDe.banner,
    photo: this.acercaDe.photo,
    descripcion: this.acercaDe.descripcion
    })
}
saveAcercaDe(id: number, acerca: any){
  this.acercaS.editarAcercaDe(this.Id,acerca).subscribe(data => {
    this.acercaDe = data;
})
}

acercaDeSubmit(form : any){
this.saveAcercaDe(this.Id,form.value)
this.acercaDeModal.hide();

}
  // Usuario modal
openFormModal() {
  this.editForm.patchValue({
    nombre: this.usuario.nombre,
    profesion: this.usuario.profesion,
    mail: this.usuario.mail,
    password: this.usuario.password

  })
  this.formModal.show();
}
saveUser(id: number,user : userInterface) {
this.acercaS.editarUser(this.Id,user).subscribe(data => {
  this.usuario = data;
})
}

onSubmit(form : any) {
 this.saveUser(this.Id,form.value);
  this.formModal.hide();
}

}




