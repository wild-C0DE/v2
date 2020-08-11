import { Component } from '@angular/core';
import { ServerDataSource } from 'ng2-smart-table';
import {HttpErrorResponse} from '@angular/common/http';
import { HttpClient } from '@angular/common/http'
import { AssignModel } from './assign-model.model'

// import { SmartTableData } from '../../../@core/data/smart-table';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.scss'],
})
export class AssignComponent {
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
   
      nameOfAgent: {
        title: 'Agent Name',
        type: 'string',
        filter: false
      },
      referenceOfAgent:  {
        title: 'Social Security',
        type: 'string',
        filter: false
      },
      listOfEquipment: {
        title: 'Equipments List',
        type: 'string',
        filter: false
      },
      referenceOfEquipment: {
        title: 'Equipment Reference',
        type: 'string',
        filter: false
      },
     
      date: {
        title: 'Date Of Assignment',
        type: 'number',
        filter: false
      },
     
      department: {
        title: 'Department',
        type: 'string',
        filter: false
      },
      comment: {
        title: 'Comment',
        type: 'string',
        filter: false
      },
    },
  };

  constructor(private http: HttpClient) {
    // const data = this.service.getData();
    // this.source.load(data);
  }
  ngOnInit(): void {
    this.source = new ServerDataSource(this.http, {endPoint : 'http://localhost:8080/api/assignList' })
    console.log(this.source);

}
onCreateConfirm(event):void { 
  var data = {
                "nameOfAgent" : event.newData.nameOfAgent,
                "referenceOfAgent" : event.newData.referenceOfAgent,
                "listOfEquipment" : event.newData.listOfEquipment,
                "referenceOfEquipment" : event.newData.referenceOfEquipment,
                "date" : event.newData.date,
                "isbn" : event.newData.isbn,
                "department" : event.newData.department,               
                "comment" : event.newData.comment,
                
                };
	this.http.post<AssignModel>('http://localhost:8080/api/assignEquipment', data).subscribe(
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
  "nameOfAgent" : event.newData.nameOfAgent,
  "referenceOfAgent" : event.newData.referenceOfAgent,
  "listOfEquipment" : event.newData.listOfEquipment,
  "referenceOfEquipment" : event.newData.referenceOfEquipment,
  "date" : event.newData.date,
  "isbn" : event.newData.isbn,
  "department" : event.newData.department,
  "comment" : event.newData.comment,
 
  };
  console.log(typeof event.newData.brand)
 if (event.newData.nameOfAgent === "") {
  window.confirm('please enter the name of the machin')
  
} else if (event.newData.referenceOfAgent === "") {

  window.confirm('please enter the reference of the machin')
}else if(event.newData.department === "") {
    window.confirm('please enter the department of the machin')   
  
  }else {
  if (window.confirm('Do you confirm the changes?')) {
this.http.post<AssignModel>('http://localhost:8080/api/updateAssignedEquipment', data).subscribe(
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
    this.http.post<AssignModel>('http://localhost:8080/api/deleteAssignedEquipment',event.data).subscribe(
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