import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Hotlist } from '../_models/hotlist.model';
import { Truck } from '../_models/truck.model';


@Injectable()
export class HotlistService {
  private hotlistUrl: string = "http://localhost:8080/hotlist";

  constructor(private http: Http) { }

  getHotlist(): Observable<Truck[]> {
    var url = this.hotlistUrl +  "/" + sessionStorage.getItem('member');
    console.log('hotlist='+url);
    return this.http.get(url)
      .map(res => {
        let json = res.text();
        console.log('json='+json)
        json = JSON.parse(json);
        console.log('json='+json)
        return json || [];
      });
  }

  addHotlist(member:string, truck:string): Observable<Hotlist> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let hotlist = { "h_member": member, "h_truck": truck };
    console.log('member = ' + JSON.stringify(hotlist));

    return this.http.post(this.hotlistUrl, JSON.stringify(hotlist), options)
      .map(res => {
        let json = res.text();//데이터만 뽑아 낼 수 있다. (헤더정보제외)
        json = JSON.parse(json);
        return json || {};
      })
  }
}
