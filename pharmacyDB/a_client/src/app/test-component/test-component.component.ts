import { Component, OnInit } from '@angular/core';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import {NotificationsService} from 'angular2-notifications';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css'],
  providers: [NotificationsService]
  
})
export class TestComponentComponent implements OnInit {

  constructor(private _noti:NotificationsService) { }

  ngOnInit() {
  }

  public options = {
    position: ["bottom", "right"],
    timeOut:1000,
    lastOnBottom: true
  }

  display()
  {
    console.log("ahihi");
    const toast = this._noti.success('Item crated', 'Click to undo', {
      timeOut: 1000,
      showProgressBar: false,
      pauseOnHover:false,
      clickToClose: true
    })
  }

}
