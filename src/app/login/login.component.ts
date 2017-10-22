import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../_models/user.model';

import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  // error = '';
  // session:any = {};

  // constructor(private router: Router, private authenticationService: AuthenticationService) { }

  // model: User;
  messages: any[];

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    // reset login status
    // this.authenticationService.logout();
    this.model = new User();
  }

  login(f) {
    // this.loading = true;
    // this.authService.login(this.model.mEmail, this.model.mPassword)
    //   .subscribe(result => {
    //     if (result === true) {
    //       console.log('1');
    //       this.router.navigate(['/truck-list']);
    //     } else {
    //       this.router.navigate(['/login']);
    //       this.loading = false;
    //     }
    //   });

    //   this.authService.login(this.model)
    //     .subscribe(isLoggedIn => {
    //       if (isLoggedIn) {
    //         this.router.navigate(['/home']);
    //       } else {
    //         this.messages.push({ severity: 'error', summary: 'Email/password incorrect!' });
    //       }
    //     });
    console.log(f.value)
    this.model = f.value;
    this.authService.login(this.model).subscribe(result => {
      console.log('result='+result)
      if (result === true) {
        console.log('1');
        this.router.navigate(['/truck-list']);
      } else {
        this.router.navigate(['/login']);
        this.loading = false;
      }
    });
  }
}
