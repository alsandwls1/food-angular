import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Member } from '../_models/member.model';

import { UserService } from '../_services/user.service';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  member: string;

  constructor(private userService: UserService, private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    // console.log('localStorage='+localStorage.getItem("member"));
    // this.member = localStorage.getItem("member");

    console.log('sessionStorage='+sessionStorage.getItem("member"));
    this.member = sessionStorage.getItem("member");
  }

  logout() {
    console.log('logout#sessionStorage=' + sessionStorage.getItem('member'));
    sessionStorage.removeItem("member");
    console.log('logout#sessionStorage remove=' + sessionStorage.getItem('member'));
    this.router.navigate(['/login']);

    // console.log('logout#localStorage=' + localStorage.getItem('member'));
    // localStorage.removeItem("member");
    // console.log('logout#localStorage remove=' + localStorage.getItem('member'));
    // this.router.navigate(['/login']);
  }

}
