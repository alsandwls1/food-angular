import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailValidator } from '@angular/forms';

import { Member } from '../_models/member.model';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  member: Member;
  errorMessage: string;

  constructor(private memberService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(f) {
    if (f.valid) {
      var member = f.value;
      this.addMember(member.email, member.password, member.nickname)
    }
  }

  addMember(email: string, password: string, nickname: string) {
    this.memberService.addMember(email, password, nickname)
      .subscribe(res => {
        let member = res;
        if(member.merror !== null) {
          this.errorMessage = member.merror;
          console.log(this.errorMessage);
        } else {
          this.router.navigate(['/login']);
        }
      }
      // member => {
      //   this.member = member;
      //   console.log("dddddddd====="+this.member)
      // }
    );
  }

}
