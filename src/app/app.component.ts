import { Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Id: number = 0;
  ruta : string = '';
  editar! : boolean;

  constructor(private activated: ActivatedRoute) {

  }

  ngOnInit(): void {
     this.ruta = this.activated.snapshot.toString();
    this.editar = this.ruta.includes("edit")
    localStorage.setItem("editar",this.editar.toString());

    this.activated.params.subscribe(params => {
      this.Id = params['id'];
      localStorage.setItem("id",this.Id.toString());

    });



  }





}
