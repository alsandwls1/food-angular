import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Member } from '../_models/member.model';
import { UserService } from '../_services/user.service';
import { AuthenticationService } from '../_services/authentication.service';


@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements OnInit {
  member: string;

  constructor(private userService: UserService,
    private authService: AuthenticationService,
    private router: Router) {
      // var currentUser = sessionStorage.getItem('member');
      // if(currentUser === null ) {
      //   this.member = null;
      // } else {
      //   this.userService.getMember(currentUser)
      //     .subscribe(res=> {
      //       console.log('res.memail:'+res.memail);
      //       this.member = res.memail;
      //     });
      // }
  }

  ngOnInit() {
    console.log('nav # ngOnInit # sessionStorage=' + sessionStorage.getItem("member"));
    var currentUser = sessionStorage.getItem('member');
    if(currentUser === null ) {
      this.member = null;
    } else {
      this.userService.getMember(currentUser)
        .subscribe(res=> {
          console.log('res.memail:'+res.memail);
          this.member = res.memail;
        });
    }
  }

  logout() {
    this.authService.logout()
    .subscribe(success => {
      sessionStorage.removeItem("member");
    });
  }
}
