import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

Id: number = 0;
edit: boolean = false;
ruta : string = '';
  constructor(private activated: ActivatedRoute) { }

  ngOnInit(): void {
    this.activated.params.subscribe(
      (params:Params) => {
        this.Id = params['id'];
      }
    )
    this.ruta = this.activated.snapshot.toString();
    if((this.ruta).includes("edit")){
       this.edit = true;
    }

  }

}