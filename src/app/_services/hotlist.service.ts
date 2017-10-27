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
    var url = this.hotlistUrl + "/" + sessionStorage.getItem('member');
    console.log('hotlist=' + url);
    return this.http.get(url)
      .map(this.extractData)
      ._catch(this.handleError);
  }

  addHotlist(member: string, truck: string): Observable<Hotlist> {
    var url = this.hotlistUrl + '/add';
    let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let hotlist = { "hId": null, "hMember": member, "hTruck": truck };
    console.log(' add holist info = ' + JSON.stringify(hotlist));

    return this.http.post(url, JSON.stringify(hotlist), options)
      .map(this.extractDataForObject)
      ._catch(this.handleError);
  }

  private extractDataForObject(res: Response) {
    let json = res.text();
    json = JSON.parse(json);
    return json || {};
  }

  private extractData(res: Response) {
    let json = res.text();
    json = JSON.parse(json);
    return json || [];
  }

  private handleError(res: Response) {
    console.log("Erroe = " + res);
    return Observable.throw(res.json().error || 'Server Down');
  }
}
