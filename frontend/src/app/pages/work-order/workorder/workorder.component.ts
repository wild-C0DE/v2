import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import {HttpClient} from '@angular/common/http';
import { ServerDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './workorder.component.html',
  styleUrls: ['./workorder.component.scss'],
})
export class WorkorderComponent {
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
      machine: {
        title: 'Machine',
        type: 'string',
      },
      manager: {
        title: 'Manager',
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
this.source = new ServerDataSource(this.http, { endPoint: "http://localhost:8080/api/workorderList", });
      console.log(this.source);
    }

  constructor(private http: HttpClient){
 
    //this.source. = 'data';
    }
    onCreateConfirm(event):void{
 

    }
    onSaveConfirm(event):void{

    }
   
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
