import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { acercaDeInterface } from '../interfaces/acercaDe.interface';
import { userInterface } from '../interfaces/user.interface';
import { AcercaService } from '../services/acerca.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.scss']
})
export class AcercaComponent implements OnInit {

  closeResult = '';

 acercaDe! : acercaDeInterface;
 usuario!:userInterface;

  @Input()Id : number = 0;
  @Input()edit!:boolean;

  constructor(private acercaS : AcercaService,private activated: ActivatedRoute) { }

  ngOnInit(): void {

  this.acercaS.getUser(this.Id).subscribe((user) => {
    this.usuario = user;
  })

  this.acercaS.getAcercaDe(this.Id).subscribe((data) => {
    this.acercaDe = data;
  })





}

}
