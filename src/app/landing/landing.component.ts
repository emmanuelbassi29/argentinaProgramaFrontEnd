import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user..service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  mailPattern: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  buscarForm  = this.fb.group({
    mail:['',{validators : [Validators.email,Validators.required,Validators.pattern(this.mailPattern)]},],
    })
    Id : number = 0;


    error : boolean = false;

  constructor(private fb: FormBuilder, private userService : UserService, private router: Router) { }

  ngOnInit(): void {
  }

  getErrorEmail() {
    return this.buscarForm.get('mail').hasError('required')?'Debe ingresar una direccion de mail' :
           this.buscarForm.get('mail').hasError('pattern')?'No es una direccion de mail valida':'';
  }

  buscarUser(): void {
      this.userService.buscarUser(this.buscarForm.value).subscribe(id => {

      if (id != 0){
      this.Id = id;
      sessionStorage.setItem("id",this.Id.toString())
      sessionStorage.setItem("editar","false")

      this.router.navigate(['/holis/' + id]);
    }
      else {
        this.error = true;
      }

    })
  }
}
