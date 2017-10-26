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

  member = sessionStorage.getItem('member');

  constructor(private hotlistService: HotlistService,
    private http: Http) { }

  ngOnInit() {
    this.getHotlist();
  }

  onSubmit(f) {

  }

  getHotlist() {
    this.hotlistService.getHotlist()
      .subscribe(trucks => {
        console.log(trucks);
        this.trucks = trucks;
      });
  }


}
