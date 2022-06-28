import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  edit: boolean = false;
ruta : string = '';
  constructor(private activated: ActivatedRoute) { }

  ngOnInit(): void {
    this.ruta = this.activated.snapshot.toString();
    if((this.ruta).includes("edit")){
       this.edit = true;
    }
  }

}
