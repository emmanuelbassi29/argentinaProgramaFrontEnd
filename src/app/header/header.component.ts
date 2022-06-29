import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogInService } from '../services/log-in.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  @Input()edit:boolean = true;
  constructor(private activated: ActivatedRoute, private log : LogInService){}
  Id: number = this.log.Id;
  ngOnInit(): void {

  }
}
