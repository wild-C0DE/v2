import { Component } from '@angular/core';
//import { LocalDataSource } from 'ng2-smart-table';

// import { SmartTableData } from '../../../@core/data/smart-table';
import { HttpClient } from '@angular/common/http'
import {HttpErrorResponse} from '@angular/common/http';
import { ServerDataSource } from 'ng2-smart-table';
@Component({
  selector: 'ngx-smart-table',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss'],
})
export class MachineComponent {
title = "machine"
source:ServerDataSource;
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
        title: 'name',
        type: 'string',
      },
      reference: {
        title: 'reference',
        type: 'string',
      },
      family: {
        title: 'family',
        type: 'string',
      },
      state: {
        title: 'state',
        type: 'string',
      },
      brand: {
        title: 'brand',
        type: 'string',
      },
      supplierName: {
        title: 'supplierName',
        type: 'string',
      },
      serialNumber: {
        title: 'serialNumber',
        type: 'string',
      },
      dateOfPurchase: {
        title: 'dateOfPurchase',
        type: 'number',
      },
      inventory: {
        title: 'inventory',
        type: 'number',
      },
      ISBN: {
        title: 'ISBN',
        type: 'string',
      },
      department: {
        title: 'department',
        type: 'string',
      },     
      image: {
        title: 'image',
        type:"html",
        valuePrepareFunction: (photo:string) => {return `<img width="50px" src="${photo}" />`;},
       
        
      },
      comment: {
        title: 'comment',
        type: 'string',
      },
    },
  };

  
  constructor(private http: HttpClient) {
    //this.source ='data
  }
  ngOnInit(): void {
    this.source = new ServerDataSource(this.http, {endPoint : 'http://localhost:8080/api/machineList' })
    console.log(this.source);
 
}
   
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
