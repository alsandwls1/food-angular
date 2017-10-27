import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { HotlistService } from '../_services/hotlist.service';
import { Hotlist } from '../_models/hotlist.model';
import { Truck } from '../_models/truck.model';

@Component({
  selector: 'app-truck-list',
  templateUrl: './truck-list.component.html',
  styleUrls: ['./truck-list.component.css']
})
export class TruckListComponent implements OnInit {
  hotlist: Hotlist;
  trucks: Truck[];

  message: string;
  member = sessionStorage.getItem('member');

  constructor(
    private hotlistService: HotlistService,
    private http: Http) { }

  ngOnInit() {
    this.getHotlist();
  }

  onSubmit(f) {
    if(f.valid) {
      this.addHotlist(this.member, f.value.htruck);
    }
  }

  addHotlist(hmember:string, htruck:string) {
    this.hotlistService.addHotlist(hmember, htruck)
    .subscribe(result => {
      // this.message = result;
      this.message = result.herror;
    });

  }

  getHotlist() {
    this.hotlistService.getHotlist()
      .subscribe(trucks => {
        console.log(trucks);
        this.trucks = trucks;
      });
  }


}
