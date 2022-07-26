import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { socialInterface } from '../interfaces/social.interface';
import { SocialService } from '../services/social.service';
declare var window: any;


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  editar:boolean = (localStorage.getItem('editar') == 'edit');
  Id : number = Number(localStorage.getItem('id'));
  editId : Number = 0;

  social : socialInterface = {
    id :  0,
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

  constructor(private fb : FormBuilder, private socialService: SocialService) { }

  ngOnInit(): void {

    this.socialService.showSocial(this.Id).subscribe((data) => {
      this.social = data;
      console.log(this.social.instagram)
    })

    this.socialModal = new window.bootstrap.Modal(
      document.getElementById('socialModal'));
  }

  openSocial(){
    this.socialModal.show();
    this.socialForm.patchValue({
      instagram: this.social.instagram,
      gitHub: this.social.gitHub,
      linkedIn: this.social.linkedIn
    })
    console.log(this.socialForm.value)


  }

  editSocialSubmit(form : any) {
console.log(form.value)
console.log(this.social.id)
    this.socialService.editSocial(this.social.id,form.value).subscribe(data => {
      this.social = data;
    })
    this.socialModal.hide();
  }

}

