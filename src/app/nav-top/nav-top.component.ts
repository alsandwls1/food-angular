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
    console.log('nav # sessionStorage=' + sessionStorage.getItem("member"));
    this.member = sessionStorage.getItem("member");
  }

  logout() {
    console.log('logout#sessionStorage=' + sessionStorage.getItem('member'));
    sessionStorage.removeItem("member");
    console.log('logout#sessionStorage remove=' + sessionStorage.getItem('member'));
    this.router.navigate(['/login']);
  }

}
