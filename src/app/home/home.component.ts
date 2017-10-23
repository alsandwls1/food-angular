import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../_models/user.model';

import { UserService } from '../_services/user.service';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: string;

  constructor(private userService: UserService, private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    // get users from secure api end point
    // this.userService.getUsers()
    //   .subscribe(users => {
    //     this.users = users;
    //   });
    console.log('localStorage='+localStorage.getItem("currentUser"));
    this.user = localStorage.getItem("currentUser");
    console.log(this.user.valueOf);

  //   this.userService.getUser(email)
  //     .subscribe(user => {
  //       this.user = user;
  //     })
  }

  logout(): void {
    this.authService.logout().subscribe(isLoggedIn => {
      if (isLoggedIn === false) {
        this.router.navigateByUrl('/login');
      }
    });
  }

}
