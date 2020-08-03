import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { ngxCsv } from 'ngx-csv/ngx-csv';
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
        title: 'Name of equipment',
        type: 'string',
      },
      nameOfAgent: {
        title: 'Name of agent',
        type: 'string',
      },
      reference: {
        title: 'Reference',
        type: 'string',
      },
      quantity: {
        title: 'Quantity',
        type: 'Number',
      },
      state: {
        title: 'Min',
        type: 'Number',
      },
      brand: {
        title: 'Brand',
        type: 'number',
      },
      supplierName: {
        title: 'Supplier name',
        type: 'string'
      },
      supplierContact: {
        title: 'Supplier contact',
        type: 'string'
      },
      dateOfUse: {
        title: 'Date of use',
        type: 'string'
      },
      isbn: {
        title: 'ISBN',
        type: 'string'
      },
      department: {
        title: 'Department',
        type: 'string'
      },
      cost: {
        title: 'Cost',
        type: 'number'
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
                "nameOfAgent" : event.newData.nameOfAgent,
                "reference" : event.newData.reference,
                "quantity" : event.newData.quantity,
                "state" : event.newData.state,
                "brand" : event.newData.brand,
                "supplierName" : event.newData.supplierName,
                "supplierContact" : event.newData.supplierContact,
                "dateOfUse" : event.newData.dateOfUse,
                "isbn" : event.newData.isbn,
                "department" : event.newData.department,               
                "cost" : event.newData.cost,
                
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
  
  var data = {
  "helper" : event.data._id,
  "nameOfEquipment" : event.newData.nameOfEquipment,
  "nameOfAgent" : event.newData.nameOfAgent,
  "reference" : event.newData.reference,
  "quantity" : event.newData.quantity,
  "state" : event.newData.state,
  "brand" : event.newData.brand,
  "supplierName" : event.newData.supplierName,
  "supplierContact" : event.newData.supplierContact,
  "dateOfUse" : event.newData.dateOfUse,
  "isbn" : event.newData.isbn,
  "department" : event.newData.department,               
  "cost" : event.newData.cost,
  
  };
  console.log(typeof event.newData.brand)
 if (event.newData.name === "") {
  window.confirm('please enter the name of the equipment')
  
} else if (event.newData.reference === "") {

  window.confirm('please enter the reference of the equipment')
}else if(event.newData.department === "") {
    window.confirm('please enter the department of the equipment')   
  
  }else {
  if (window.confirm('Do you confirm the changes?')) {
this.http.post<EquipmentModel>('http://localhost:8080/api/updateEquipment', data).subscribe(
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
location.reload()
  } else {
    event.confirm.reject();
  }
}

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
@ViewChild('content') content: ElementRef;
  public downloadPDF() {
    var doc = new jsPDF('p', 'pt', 'letter');

    let specialElementHandlers = {
      '#editor': function(element, renderer) {
        return true;
      }
    }
    let content = this.content.nativeElement;

    doc.fromHTML(content, 70, 15, {
      'width': 190,
      'elementHandlers': specialElementHandlers
    });
    doc.save('equipment.pdf')
  };

  downloadCSV() {
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      useBom: true,
      
    };
    this.source.getAll().then(data => {
      new ngxCsv(data, 'report', options);
    })
  }
}