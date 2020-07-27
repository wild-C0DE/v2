import { Component } from '@angular/core';
//import { LocalDataSource } from 'ng2-smart-table';

// import { SmartTableData } from '../../../@core/data/smart-table';
import { HttpClient } from '@angular/common/http'
import {HttpErrorResponse} from '@angular/common/http';
import { ServerDataSource } from 'ng2-smart-table';
import { Addwork } from '../../work-order/addwork.model'

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './correction.component.html',
  styleUrls: ['./correction.component.scss'],
})
export class CorrectionComponent {
  title = "correction"
source:ServerDataSource;

  settings = {
    actions: {
      delete: false,
      add: false,
      edit: false

    },
    columns: {
      machine: {
        title: 'Machine',
        type: 'string',
      },
      nameOfTheIntervention: {
        title: 'Name Of The Intervention',
        type: 'string',
      },
      date: {
        title: 'Date',
        type: 'number',
      },
      manager: {
        title: 'Manager',
        type: 'string',
      },
      duration: {
        title: 'Duration',
        type: 'string',
      },
      agent: {
        title: 'Agent',
        type: 'string',
      },
      department: {
        title: 'Department',
        type: 'number',
      },
      
    },
  };

  constructor(private http: HttpClient) {
    //this.source ='data
  }
  ngOnInit(): void {
    this.source = new ServerDataSource(this.http, {endPoint : 'http://localhost:8080/api/correctionList' })
    console.log(this.source);
 
}
}
