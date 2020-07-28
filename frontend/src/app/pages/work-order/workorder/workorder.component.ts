import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import {HttpClient} from '@angular/common/http';
import { ServerDataSource } from 'ng2-smart-table';
import {HttpErrorResponse} from '@angular/common/http';
import {Addwork} from "../addwork.model"
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
this.source = new ServerDataSource(this.http, { endPoint: "http://localhost:8080/api/workorderList", });
      console.log(this.source);
    }

  constructor(private http: HttpClient){
 
    //this.source. = 'data';
    }
    onCreateConfirm(event):void{
      var data = {"nameOfTheIntervention" : event.newData.nameOfTheIntervention,
      "typeOfIntervention" : event.newData.typeOfIntervention,
      "family" : event.newData.family,
      "state" : event.newData.state,
      "machine" : event.newData.machine,
      "manager" : event.newData.manager,
      "agent" : event.newData.agent,
      "depertment" : event.newData.depertment,
      "duration" : event.newData.duration,
      "equipmentUsed" : event.newData.equipmentUsed,
      "isbn" : event.newData.isbn,
                    
      
      };
  this.http.post<Addwork>('http://localhost:8080/api/workOrder ', data).subscribe(
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
    onSaveConfirm(event):void{
      var data = {
        "helper" : event.data._id,
        "typeOfIntervention" : event.newData.typeOfIntervention,
        "family" : event.newData.family,
        "machine" : event.newData.machine,
        "state" : event.newData.state,
        "manager" : event.newData.manager,
        "agent" : event.newData.agent,
        "depertment" : event.newData.depertment,
        "duration" : event.newData.duration,
        "equipmentUsed" : event.newData.equipmentUsed,
                
        
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
      this.http.post<Addwork>('http://localhost:8080/api/workorderList/updateWork', data).subscribe(
      res => {
      console.log(res)
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
    this.http.post<Addwork>('http://localhost:8080/api/deleteWorkorder',event.data).subscribe(
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
