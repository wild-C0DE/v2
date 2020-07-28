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
      },
      date: {
        title: 'Date',
        type: 'number',
      },
      nameOfTheIntervention: {
        title: 'Name Of The Intervention',
        type: 'string',
      },
      typeOfIntervention: {
        title: 'Type Of Intervention',
        type: 'string',
      },
      state: {
        title: 'State',
        type: 'string',
      },
      machine: {
        title: 'Machine',
        type: 'string',
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
      depertment: {
        title: 'Depertment',
        type: 'number',
      },
      equipmentUsed: {
        title: 'Equipment Used',
        type: 'number',
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
