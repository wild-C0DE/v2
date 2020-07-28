import { Component } from '@angular/core';

// import { SmartTableData } from '../../../@core/data/smart-table';

import { HttpClient } from '@angular/common/http'
import {HttpErrorResponse} from '@angular/common/http';
import { ServerDataSource } from 'ng2-smart-table';
import { EquipmentModel } from './equipment.model'

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './equipement.component.html',
  styleUrls: ['./equipement.component.scss'],
})
export class EquipementComponent {
  title = "equipment"
  source:ServerDataSource;
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate:true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave:true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      nameOfEquipment: {
        title: 'nameOfEquipment',
        type: 'string',
      },
      machnameOfAgentine: {
        title: 'nameOfAgent',
        type: 'string',
      },
      reference: {
        title: 'reference',
        type: 'string',
      },
      quantity: {
        title: 'quantity',
        type: 'Number',
      },
      state: {
        title: 'Min',
        type: 'Number',
      },
      brand: {
        title: 'brand',
        type: 'number',
      },
      supplierName: {
        title: 'supplierName',
        type: 'string'
      },
      supplierContact: {
        title: 'supplierContact',
        type: 'string'
      },
      dateOfUse: {
        title: 'dateOfUse',
        type: 'string'
      },
      isbn: {
        title: 'isbn',
        type: 'string'
      },
      department: {
        title: 'department',
        type: 'string'
      },
      image: {
        title: 'image',
        type: 'string'
      },
      
    },
  };

  constructor(private http: HttpClient) {
    // const data = this.service.getData();
    // this.source.load(data);
  }
  ngOnInit(): void {
    this.source = new ServerDataSource(this.http, {endPoint : 'http://localhost:8080/api/equipmentList' })
    console.log(this.source);

}
onCreateConfirm(event):void { 
  var data = {
                "nameOfEquipment" : event.newData.nameOfEquipment,
                "machnameOfAgentine" : event.newData.machnameOfAgentine,
                "reference" : event.newData.reference,
                "quantity" : event.newData.quantity,
                "state" : event.newData.state,
                "brand" : event.newData.brand,
                "supplierName" : event.newData.supplierName,
                "supplierContact" : event.newData.supplierContact,
                "dateOfUse" : event.newData.dateOfUse,
                "isbn" : event.newData.isbn,
                "department" : event.newData.department,               
                "image" : event.newData.image,
                
                };
	this.http.post<EquipmentModel>('http://localhost:8080/api/addEquipment', data).subscribe(
        res => {
          console.log(res);
          event.confirm.resolve(event.newData);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      });
} 
onSaveConfirm(event):void {
  
}
  onDeleteConfirm(event): void {
    console.log(event.data)
    this.http.post<EquipmentModel>('http://localhost:8080/api/deleteEquipment',event.data).subscribe(
      res => {
        console.log(res);
        event.confirm.resolve(event.source.data);
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Client-side error occured.");
      } else {
        console.log("Server-side error occured.");
      }
    });
   
}
}