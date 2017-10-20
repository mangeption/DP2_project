import { Component, OnInit } from '@angular/core';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.exportFile();
  }

  exportFile()
  {
    var data = [
      {
        "name": "Test 1",
        "age": 13,
        "average": 8.2,
        "approved": true,
        "description": "using 'Content here, content here' "
      },
      {
        "name": 'Test 2',
        "age": 11,
        "average": 8.2,
        "approved": true,
        "description": "using 'Content here, content here' "
      }
    ];
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      useBom: true
    };
    new Angular2Csv(data, "MyReport", options);
    console.log("Generated");
  }
}
