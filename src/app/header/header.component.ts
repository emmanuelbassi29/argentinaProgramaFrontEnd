import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { socialInterface } from '../interfaces/social.interface';
import { LogInService } from '../services/log-in.service';
import { SocialService } from '../services/social.service';
declare var window: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  editar:boolean = (localStorage.getItem('editar') == 'edit');
Id : number = Number(localStorage.getItem('id'));
editId : Number = 0;
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


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params['edit'])
    });

    if (this.Id > 0){
    this.socialService.showSocial(this.Id).subscribe(data => {
        this.social = data;

      })
    }

      this.socialModal = new window.bootstrap.Modal(
        document.getElementById('socialModal'));
}

logOut(): void {
  localStorage.clear();
  this.editar = false;
  this.router.navigate(['/login']);

}

openSocial(){
  this.socialModal.show();
  this.socialForm.patchValue({
    instagram: this.social.instagram,
    gitHub: this.social.gitHub,
    linkedIn: this.social.linkedIn
  })

}

editSocialSubmit(form : any) {

  this.socialService.editSocial(this.social.id,form.value).subscribe(data => {
    this.social = data;
  })
  this.socialModal.hide();
}



}
