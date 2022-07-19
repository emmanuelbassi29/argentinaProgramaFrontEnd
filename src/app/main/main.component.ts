import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  Id: number = 0;
  ruta : string = '';
  editar! : string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

  }
}