import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import {HttpClient} from '@angular/common/http';
import { ServerDataSource } from 'ng2-smart-table';
import {HttpErrorResponse} from '@angular/common/http';
import {Addwork} from "../addwork.model"
@Component({
  selector: 'ngx-smart-table',
  templateUrl: './enqueue.component.html',
  styleUrls: ['./enqueue.component.scss'],
})
export class EnqueueComponent {
  data:any = [];
  source: ServerDataSource;
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      numberOrder: {
        title: 'Number Order',
        type: 'number',
        filter: false
      },
      date: {
        title: 'Date',
        type: 'number',
        filter: false
      },
      nameOfTheIntervention: {
        title: 'Name Of The Intervention',
        type: 'string',
        filter: false
      },
      typeOfIntervention: {
        title: 'Type Of Intervention',
        type: 'string',
        filter: false
      },
      state: {
        title: 'State',
        type: 'string',
        filter: false
      },
      machine: {
        title: 'Machine',
        type: 'string',
        filter: false
      },
      manager: {
        title: 'Manager',
        type: 'string',
        filter: false
      },
      duration: {
        title: 'Duration',
        type: 'string',
        filter: false
      },
      agentName: {
        title: 'Agent',
        type: 'string',
        filter: false
      },
      department: {
        title: 'Department',
        type: 'number',
        filter: false
      },
      equipmentUsed: {
        title: 'Equipment Used',
        type: 'number',
        filter: false
      },
    },
  };

  ngOnInit(): void {
    this.source = new ServerDataSource(this.http, { endPoint: "http://localhost:8080/api/workorderList/enqueue", });
          console.log(this.source);
        }
    
      constructor(private http: HttpClient){
     
        //this.source. = 'data';
        }
}
