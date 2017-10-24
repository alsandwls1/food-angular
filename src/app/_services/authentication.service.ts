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
  private headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });

  constructor(private http: Http) { }

  login(email: string, password: string): Observable<Member> {
    const url = `${this.loginUrl}/login`;
    let headers = new Headers({ 'Content-Type':'application/json;  charset=utf-8', 'Accept' : 'application/json'})
    let options = new RequestOptions({ headers : headers});
    let member = {"mEmail": email, "mPassword": password}

    return this.http.post(url, JSON.stringify(member), options)
      .map(res => {
        let json = res.text();
        // localStorage.setItem("member", json);
        console.log('service login# json(res.text)=' + json);
        json = JSON.parse(json);
        return json || {};
      })
  }

  logout(): Observable<boolean> {
    this.isLoggedIn = !this.isLoggedIn;
    localStorage.clear();
    return Observable.of(false);
  }

  // register(user: User): Observable<boolean> {
  //   return this.http.post(this.authUrl + '/register', user)
  //     .map(response => response.json() as User)
  //     .map(currentUser => !User.isNull(currentUser))
  //     .catch(AuthenticationService.handleError);
  // }


  // public token: string;
  //
  // authUrl: string = "http://localhost:8080/api/";
  // private headers = new Headers({'Content-Type': 'application/json'});
  //
  //
  // constructor(private http: Http, private router: Router) {
  //   // set token if saved in local storage
  //   var currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //   console.log('currentUser=' + currentUser);
  //   this.token = currentUser && currentUser.token;
  //   console.log(' this.token=' + this.token);
  // }

  // login(email: string, password: string) {
  //   let user = JSON.stringify({ mEmail: email, mPassword: password });
  //   console.log(user);
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });
  //
  //
  //   return this.http
  //       .post(this.authUrl, user, options)
  //       .map(this.extractData)
  //       .catch(this.handleError);
  //   // let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
  //   // let options = new RequestOptions({ headers: headers });
  //   // let member = { "email": email, "password": password };
  //   // console.log('member = ' + JSON.stringify(member));
  //   //
  //   // return this.http.post(this.authUrl, JSON.stringify(member), options)
  //   //   .map(this.extractDataForObject)
  //   //   .catch(this.handleError);
  //
  //   // return this.http.post(this.authUrl, JSON.stringify(member), options).toPromise().then(res => {
  //   //   localStorage.setItem("email", res.text());
  //   //   this.subject.next({login:'true'});
  //   // });
  // }

  //   private extractData(res: Response) {
  //     let body = res.json();
  //     console.log(body);
  //     return body.data || {};
  // }
  // private handleError(error: Response | any) {
  //     // in a real world app, we might use a remote logging infrastructure
  //     let errMsg: string;
  //     if (error instanceof Response) {
  //         const body = error.json() || '';
  //         const err = body.error || JSON.stringify(body);
  //         errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //     } else {
  //         errMsg = error.message ? error.message : error.toString();
  //     }
  //     console.error(errMsg.toString());
  //     return Observable.throw(errMsg);
  // }

  // private extractDataForObject(res: Response) {
  //   console.log('login start...');
  //   console.log('extractDataForObject#res = ' + JSON.stringify(res));
  //   let json = res.text();//데이터만 뽑아 낼 수 있다. (헤더정보제외)
  //   json = JSON.parse(json);
  //   return json || {};
  // }
  //
  // private handleError(res: Response) {
  //   console.log('login error...');
  //   console.log(res);
  //   return Observable.throw(res.json().error || 'Server Down');
  // }

  // login(memail: string, mpassword: string): Observable<boolean> {
  //   console.log('JSON.stringify(response)=' + memail+ mpassword)
  //
  //   let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });
  // let member = { "email": email, "password": password };

  // return this.http.post(this.authUrl, JSON.stringify({ "mEmail": memail, "mPassword": mpassword }), options)
  //   .map((response: Response) => {
  //     // login successful if there's a jwt token in the response\
  //     console.log('JSON.stringify(response)=' + JSON.stringify(response))
  //     console.log('response.json()=' + response.json());
  //     console.log('token=' + response.json().token);
  //
  //     localStorage.setItem('currentUser', JSON.stringify({ memail: memail, mpassword: mpassword }));
  //     // let token = response.json() && response.json().token;
  //     // console.log('token2=' + response.json().token);
  //
  //     console.log('email, password=' + memail + ":" + mpassword);
  //     // if (token) {
  //     //   // set token property
  //     //   this.token = token;
  //     //   // localStorage.setItem('currentUser', JSON.stringify({ memail: memail, token: token }));
  //     //
  //     //   // store email and jwt token in local storage to keep user logged in between page refreshes
  //     //   console.log('current' + localStorage.getItem('currentUser'));
  //     //   // return true to indicate successful login
  //     //   return true;
  //     // } else {
  //     //   // return false to indicate failed login
  //     //   return false;
  //     }
  //   });
  // }

  // login(memail: string, mpassword: string): Observable<boolean> {
  //   return this.http.post(this.authUrl, JSON.stringify({ memail: memail, mpassword: mpassword }), { headers: this.headers })
  //     .map((response: Response) => {
  //       // login successful if there's a jwt token in the response
  //       let token = response.json() && response.json().token;
  //       console.log('token='+token);
  //       if (token) {
  //         // store username and jwt token in local storage to keep user logged in between page refreshes
  //         localStorage.setItem('currentUser', JSON.stringify({ memail: memail, token: token }));
  //
  //         // return true to indicate successful login
  //         return true;
  //       } else {
  //         // return false to indicate failed login
  //         return false;
  //       }
  //     }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  // }
  //
  // logout(): void {
  //   // clear token remove user from local storage to log user out
  //   this.token = null;
  //   localStorage.removeItem('currentUser');
  //
  // }
}
