import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
registerForm = this.fb.group({
nombre: [''],
apellido: [''],
mail:[''],
password: ['']
})

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
onSubmit(): void {
  console.log(this.registerForm.value)
}
}
