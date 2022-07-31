import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  Id: number = 0;
  ruta : string = '';
  editar! : string;
  id1 : number = 0;
  constructor(private route: ActivatedRoute, private router: Router) { }
/*
  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    event.preventDefault();
    alert("La pagina se va a cerrar")
    event.returnValue = 'Your data will be lost!';
    return false;
  }
*/


  ngOnInit(): void {

    this.route.params
    .subscribe(
      (params: Params) => {
        this.id1 = +params['id'];
        console.log(this.id1)
      }
    );
    if (this.id1 != Number(sessionStorage.getItem('id'))){
        this.router.navigate(['**'])

    }

  }
}
