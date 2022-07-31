import { userInterface } from './../../interfaces/user.interface';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user..service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  mailPattern: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


registerForm = this.fb.group({
nombre: ['', Validators.required],
profesion: ['', Validators.required],
mail:['',{validators : [Validators.email,Validators.required,Validators.pattern(this.mailPattern)],updateOn:"blur"},],
  password:['',{validators : [Validators.required, this.checkPassword]}]
  })

checkPassword(control : any) {
  let enteredPassword = control.value
  let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  return (!passwordCheck.test(enteredPassword) && enteredPassword) ? {'requirements': true} : null;
}

getErrorPassword() {
  return this.registerForm.get('password').hasError('required') ? 'Debe ingresar una contraseña' :
         this.registerForm.get('password').hasError('requirements') ? 'La contraseña debe tener como minimo 8 caracteres una mayuscula, letras y un numero':''
}

getErrorEmail() {
  return this.registerForm.get('mail').hasError('required')?'Debe ingresar una direccion de mail' :
         this.registerForm.get('mail').hasError('pattern')?'No es una direccion de mail valida':'';
}


  constructor(private fb: FormBuilder, private http: HttpClient, private userService : UserService,private router: Router) { }

  ngOnInit(): void {
  }
onSubmit(): void {
  if(this.registerForm.valid) {
  this.newUSer(this.registerForm.value);
}
}

newUSer(user: Object): void {

  this.userService.addUser(user).subscribe(data => {
    console.log(data)
    this.router.navigate(['/login']);
  })
}

}
