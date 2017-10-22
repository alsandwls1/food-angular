import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from '../_services/authentication.service';
import { User } from '../_models/user.model';

@Injectable()
export class UserService {

  userUrl: string = "http://localhost:8080/api";

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService) {
  }

  // getUsers(): Observable<User[]> {
  //   // add authorization header with jwt token
  //   let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
  //   let options = new RequestOptions({ headers: headers });
  //
  //   // get users from api
  //   return this.http.get(this.userUrl, options)
  //     .map((response: Response) => response.json());
  // }

  getUsers(): Observable<User[]> {
    console.log('getUsers() working.');
    return this.http.get(this.userUrl + '/users')
      .map(response => response.json() as User[]);
  }

  getUser(userId: string): Observable<User> {
    return this.http.get(this.userUrl + '/user/' + userId)
      .map(response => response.json());
  }

}
