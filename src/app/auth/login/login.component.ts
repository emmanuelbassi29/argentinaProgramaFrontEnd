import { logInInterface } from './../../interfaces/logIn.inteface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { LogInService } from 'src/app/services/log-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm  = this.fb.group({
  mail:[''],
  password:['']
  })
  Id : number = 0;
  edit: string = "";


  error : boolean = false;
  constructor(private fb: FormBuilder, private log : LogInService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
console.log(this.loginForm)
    this.log.getUser(this.loginForm.value).subscribe(id => {

      if (id != 0){
      this.Id = id;
      this.edit = "edit"
      localStorage.setItem("id",this.Id.toString())
      localStorage.setItem("editar",this.edit)
      this.router.navigate(['/holis/' + id + '/' + this.edit]);

    }
      else {
        this.error = true;
      }

    })
  }
}
