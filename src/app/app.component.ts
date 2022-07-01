import { Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainComponent } from './main/main.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Id: number = 0;
  ruta : string = '';
  editar! : boolean;
  @ViewChild(MainComponent) main! : MainComponent;

  constructor(private activated: ActivatedRoute) { }

  AfterContentInit(): void {
    this.ruta = this.activated.pathFromRoot.toString();
    if((this.ruta).includes("edit")){
       this.editar = false;
       console.log(this.editar)
    }
  }



  ngAfterViewInit() {
    this.Id = this.main.Id;
  }

}
