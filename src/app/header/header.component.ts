import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogInService } from '../services/log-in.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private activated: ActivatedRoute, private log : LogInService, private router: Router){}
  editar:boolean = (localStorage.getItem('editar') == 'edit');

  ngOnInit(): void {
this.ngOnInit();
}

logOut(): void {
  localStorage.clear();
  this.editar = false;
  this.router.navigate(['/login']);
}
}
