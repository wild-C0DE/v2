import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ServerDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.scss'],
})
export class StockTableComponent {
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
     
      name: {
        title: 'Name',
        type: 'string',
      },
      reference: {
        title: 'Reference',
        type: 'string',
      },
      security: {
        title: 'Security Stock',
        type: 'Number',
      },
      min: {
        title: 'Min',
        type: 'Number',
      },
      max: {
        title: 'Max',
        type: 'number',
      },
    },
  };
  ngOnInit(): void {
    this.source = new ServerDataSource(this.http, { endPoint: "http://localhost:8080/stock", });
          console.log(this.source);
        }
 

  constructor(private http: HttpClient) {
    
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
