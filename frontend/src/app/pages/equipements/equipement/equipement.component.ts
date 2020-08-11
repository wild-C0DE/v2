import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { ngxCsv } from 'ngx-csv/ngx-csv';
// import { SmartTableData } from '../../../@core/data/smart-table';
import { HttpClient } from '@angular/common/http'
import {HttpErrorResponse} from '@angular/common/http';
import { ServerDataSource } from 'ng2-smart-table';
import { EquipmentModel } from './equipment.model'
import {DatepickerComponent} from '../datepicker/datepicker.component'
import * as moment from 'moment';

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
        title: 'Name',
        type: 'string',
        filter: false
      },
      
      reference: {
        title: 'Reference',
        type: 'string',
        filter: false
      },
      quantity: {
        title: 'Quantity',
        type: 'Number',
        filter: false
      },
      state: {
        title: 'Min',
        type: 'Number',
        filter: false
      },
      brand: {
        title: 'Brand',
        type: 'number',
        filter: false
      },
      supplierName: {
        title: 'Supplier Name',
        type: 'string',
        filter: false
      },
      supplierContact: {
        title: 'Supplier Contact',
        type: 'string',
        filter: false
      },
      dateOfUse: {
        title: 'Date Of Use',
        type: 'html',
        //renderComponent: DatepickerComponent,
        editor: {
          type: 'custom',
          component: DatepickerComponent,
        },
        filter: false,
      },
      isbn: {
        title: 'ISBN',
        type: 'string',
        filter: false
      },
      department: {
        title: 'Department',
        placeholder:"Select ...",
        filter: false,
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
           
            list: [
              {value: 'Maintenance', title:'Maintenance'},
              {value: 'Production', title:'Production'},
              {value: 'Quality', title:'Quality'},
             
            ],
          },
        
        }
      },
      cost: {
        title: 'Cost',
        type: 'number',
        filter: false
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
onCreateConfirm(event) { 
  console.log(event.newData)
  var data = {
                "nameOfEquipment" : event.newData.nameOfEquipment,
                "reference" : event.newData.reference,
                "quantity" : event.newData.quantity,
                "state" : event.newData.state,
                "brand" : event.newData.brand,
                "supplierName" : event.newData.supplierName,
                "supplierContact" : event.newData.supplierContact,
                "dateOfUse" : moment("2019-05-25").format("YYYY-MM-DD"),
                "isbn" : event.newData.isbn,
                "department" : event.newData.department,               
                "cost" : event.newData.cost,
                
                };
                
                console.log(typeof data.dateOfUse)
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
  "reference" : event.newData.reference,
  "quantity" : event.newData.quantity,
  "state" : event.newData.state,
  "brand" : event.newData.brand,
  "supplierName" : event.newData.supplierName,
  "supplierContact" : event.newData.supplierContact,
  "dateOfUse" : moment(event.newData.dateOfUse).toDate(),
  "isbn" : event.newData.isbn,
  "department" : event.newData.department,               
  "cost" : event.newData.cost,
  
  };
  console.log(typeof event.newData.dateOfUse)
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