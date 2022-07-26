import { Component, Input, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { socialInterface } from '../interfaces/social.interface';
=======
import { ActivatedRoute, Router } from '@angular/router';
>>>>>>> master
import { LogInService } from '../services/log-in.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  editar:boolean = (localStorage.getItem('editar') == 'edit');
Id : number = Number(localStorage.getItem('id'));
editId : Number = 0;
<<<<<<< HEAD
Id2 : any;
social : socialInterface = {
  id : 0,
  instagram : "",
  gitHub:"",
  linkedIn:""
}


socialModal: any;
socialForm = this.fb.group({
  instagram: [''],
  gitHub: [''],
  linkedIn: ['']

})

edit : string = '';

  constructor(private route: ActivatedRoute, private log : LogInService
  ,private router: Router,private fb : FormBuilder,private socialService:SocialService){}

=======



  constructor(private activated: ActivatedRoute, private log : LogInService
    , private router: Router){}
>>>>>>> master

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params['edit'])
    });

<<<<<<< HEAD
    if (this.Id > 0){
    this.socialService.showSocial(this.Id).subscribe(data => {
        this.social = data;
=======
>>>>>>> master



}

logOut(): void {
  localStorage.clear();
  this.editar = false;
  this.router.navigate(['/login']);

}

<<<<<<< HEAD
openSocial(){
  this.socialModal.show();
  this.socialForm.patchValue({
    instagram: this.social.instagram,
    gitHub: this.social.gitHub,
    linkedIn: this.social.linkedIn
  })
=======
>>>>>>> master






}
