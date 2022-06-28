import { userInterface } from './../../interfaces/user.interface';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
registerForm = this.fb.group({
nombre: ['', Validators.required],

mail:[''],
password: ['']
})



  constructor(private fb: FormBuilder, private http: HttpClient, private service : RegisterService,private router: Router) { }

  ngOnInit(): void {
  }
onSubmit(): void {
  console.log()
  this.newUSer(this.registerForm.value);
}


newUSer(user: Object): void {

  this.service.addUser(user).subscribe(data => {
    console.log(data)
    this.router.navigate(['/holis/' + data + '/edit']);
  })
}

}
