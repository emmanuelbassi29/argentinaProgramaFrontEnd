import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { socialInterface } from '../interfaces/social.interface';
import { UserService } from '../services/user..service';
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

  constructor(private route: ActivatedRoute, private userService : UserService
  ,private router: Router,private fb : FormBuilder,private socialService:SocialService){}


  ngOnInit(): void {

    this.socialService.showSocial(this.Id).subscribe(data => {
        this.social = data;
    })


  this.socialModal = new window.bootstrap.Modal(
  document.getElementById('socialModal'));
  }


logOut(): void {
  sessionStorage.clear();
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
