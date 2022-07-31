import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { UserService } from 'src/app/services/user..service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


mailPattern: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  loginForm  = this.fb.group({
  mail:['',{validators : [Validators.email,Validators.required,Validators.pattern(this.mailPattern)],updateOn:"blur"},],
  password:['',{validators : [Validators.required, this.checkPassword]}]
  })

  Id : number = 0;
  edit: boolean = false;
  editar : string = "";

  error : boolean = false;
  constructor(private fb: FormBuilder, private userService : UserService, private router: Router) { }

  ngOnInit(): void {
  }


  checkPassword(control : any) {
    let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? {'requirements': true} : null;
  }

  getErrorPassword() {
    return this.loginForm.get('password').hasError('required') ? 'Debe ingresar una contraseña' :
           this.loginForm.get('password').hasError('requirements') ? 'La contraseña debe tener como minimo 8 caracteres una mayuscula, letras y un numero':''
  }

  getErrorEmail() {
    return this.loginForm.get('mail').hasError('required')?'Debe ingresar una direccion de mail' :
           this.loginForm.get('mail').hasError('pattern')?'No es una direccion de mail valida':'';
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
    this.userService.getUser(this.loginForm.value).subscribe(id => {

      if (id != 0){
      this.Id = id;
      this.edit = true;
      this.editar = 'edit';
      sessionStorage.setItem("id",this.Id.toString())
      sessionStorage.setItem("editar",this.editar)
      this.router.navigate(['/holis/',id,this.edit]);

    }
      else {
        this.error = true;
      }

    })

  }
  }
}
