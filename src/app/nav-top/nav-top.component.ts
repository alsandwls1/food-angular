import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Member } from '../_models/member.model';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements OnInit {
  member: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    console.log('nav # ngOnInit # sessionStorage=' + sessionStorage.getItem("member"));
    this.member = sessionStorage.getItem("member");
    this.getMember();
  }

  getMember() {
    console.log(this.userService.getMember(this.member))
    return this.userService.getMember(this.member)

  }

  logout() {
    console.log('logout#sessionStorage=' + sessionStorage.getItem('member'));
    sessionStorage.removeItem("member");
    console.log('logout#sessionStorage remove=' + sessionStorage.getItem('member'));
  }


}
