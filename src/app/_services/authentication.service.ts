import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/Rx';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

import {Member} from '../_models/member.model';

@Injectable()
export class AuthenticationService {
  loginUrl: string = "http://localhost:8080/members";
  isLoggedIn = false;

  member: Member;

  private headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });

  constructor(private http: Http) { }

  login(email: string, password: string): Observable<Member> {
    const url = `${this.loginUrl}/login`;
    let headers = new Headers({ 'Content-Type': 'application/json;  charset=utf-8', 'Accept': 'application/json' })
    let options = new RequestOptions({ headers: headers });
    let member = { "mEmail": email, "mPassword": password }

    return this.http.post(url, JSON.stringify(member), options)
      .map(res => {
        let json = res.text();
        // localStorage.setItem("member", json);
        console.log('service login# json(res.text)=' + json);
        json = JSON.parse(json);
        return json || {};
      });
  }

  logout() {
    const url = `${this.loginUrl}/logout`;
    return this.http.post(url, {})
      .map(res => res)
      .subscribe(success => {
        sessionStorage.removeItem("member");
      });
  }

}
