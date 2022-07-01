import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogInService } from '../services/log-in.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  ruta: string='';
  @Input()editar!:boolean;
  constructor(private activated: ActivatedRoute, private log : LogInService, private router: Router){}

  ngOnInit(): void {


  }

logOut(): void {

  this.editar = true;
  this.router.navigate(['/login']);
}
}
