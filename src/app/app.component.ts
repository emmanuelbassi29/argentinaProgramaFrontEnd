import { Component, Input, ViewChild } from '@angular/core';
import { MainComponent } from './main/main.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Id: number = 0;
  edit : boolean = true;

  @ViewChild(MainComponent) main! : MainComponent;

  constructor() { }



  ngAfterViewInit() {
    this.Id = this.main.Id;
    this.edit = this.main.edit;
  }

}
