import { Component } from '@angular/core';
//import { LocalDataSource } from 'ng2-smart-table';

// import { SmartTableData } from '../../../@core/data/smart-table';
import { HttpClient } from '@angular/common/http'
import {HttpErrorResponse} from '@angular/common/http';
import { ServerDataSource } from 'ng2-smart-table';
import { MachinModel } from './machin-model.model'
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
      uploadImageButton: '<i type="file" class="custom-file-input" id="inputGroupFile01>  ',
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
      supplierContact: {
        title: 'supplierContact',
        type: 'string',
      },
      serialNumber: {
        title: 'serialNumber',
        type: 'number',
      },
      dateOfPurchase: {
        title: 'dateOfPurchase',
        type: 'number',
      },
      inventory: {
        title: 'inventory',
        type: 'number',
      },
      isbn: {
        title: 'isbn',
        type: 'string',
      },
      department: {
        title: 'department',
        type: 'string',
      },     
      // image: {
      //   title: 'image',
      //   type:"html",
      //   valuePrepareFunction: (photo:string) => {return `<img width="50px" src="${photo}" />`;},
       
        
      // },
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

onCreateConfirm(event):void { 
  var data = {"name" : event.newData.name,
                "reference" : event.newData.reference,
                "family" : event.newData.family,
                "state" : event.newData.state,
                "brand" : event.newData.brand,
                "supplierName" : event.newData.supplierName,
                "supplierContact" : event.newData.supplierContact,
                "serialNumber" : event.newData.serialNumber,
                "dateOfPurchase" : event.newData.dateOfPurchase,
                "inventory" : event.newData.inventory,
                "isbn" : event.newData.isbn,
                "department" : event.newData.department,               
                // "image" : event.newData.image,
                "comment" : event.newData.comment,               
                
                }; 
  if (event.newData.name === "") {
    window.confirm('please enter the name of the machin')
                  
   } else if (event.newData.reference === "") {
                
                  window.confirm('please enter the reference of the machin')
  }else if(event.newData.department === "") {
                    window.confirm('please enter the department of the machin')   
                  
  }else {
	this.http.post<MachinModel>('http://localhost:8080/api/addMachine', data).subscribe(
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
    
   
} 

onSaveConfirm(event):void {
  
  var data = {
  "helper" : event.data._id,
  "name" : event.newData.name,
  "reference" : event.newData.reference,
  "family" : event.newData.family,
  "state" : event.newData.state,
  "brand" : event.newData.brand,
  "supplierName" : event.newData.supplierName,
  "supplierContact" : event.newData.supplierContact,
  "serialNumber" : event.newData.serialNumber,
  "dateOfPurchase" : event.newData.dateOfPurchase,
  "inventory" : event.newData.inventory,
  "isbn" : event.newData.isbn,
  "department" : event.newData.department,               
  // "image" : event.newData.image,
  "comment" : event.newData.comment,            
  
  };
  console.log(typeof event.newData.serialNumber)
 if (event.newData.name === "") {
  window.confirm('please enter the name of the machin')
  
} else if (event.newData.reference === "") {

  window.confirm('please enter the reference of the machin')
}else if(event.newData.department === "") {
    window.confirm('please enter the department of the machin')   
  
  }else {
  if (window.confirm('Do you confirm the changes?')) {
this.http.post<MachinModel>('http://localhost:8080/api/updateMachin', data).subscribe(
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
  } else {
    event.confirm.reject();
  }
}

}
  onDeleteConfirm(event): void {
    console.log(event.data)

    
      if (window.confirm('Are you sure you want to delete?')) {
        this.http.post<MachinModel>('http://localhost:8080/api/deleteMachin',event.data).subscribe(

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
   
      } else {
        event.confirm.reject();
      }
    
    
}
}