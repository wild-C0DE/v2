import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss'],
})
export class MachineComponent {

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
      img: {
        title: 'Image',
        type: 'string',
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      family: {
        title: 'Family',
        type: 'string',
      },
      reference: {
        title: 'Reference',
        type: 'string',
      },
      state: {
        title: 'State',
        type: 'string',
      },
      sname: {
        title: 'Supplier Name',
        type: 'string',
      },
      scontact: {
        title: 'Supplier Contact',
        type: 'string',
      },
      serialnum: {
        title: 'Serial Number',
        type: 'number',
      },
      date: {
        title: 'Date',
        type: 'number',
      },
      inventory: {
        title: 'Inventory',
        type: 'string',
      },
      isbn: {
        title: 'ISBN',
        type: 'string',
      },
      dep: {
        title: 'Department',
        type: 'string',
      },
      comment: {
        title: 'Comment',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
