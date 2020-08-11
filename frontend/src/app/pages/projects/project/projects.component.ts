import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { ngxCsv } from 'ngx-csv/ngx-csv';
// import { SmartTableData } from '../../../@core/data/smart-table';
import { HttpClient } from '@angular/common/http'
import {HttpErrorResponse} from '@angular/common/http';
import { ServerDataSource } from 'ng2-smart-table';
import { ProjectsModel } from './projects.model'

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  title = "projects"
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
      project: {
        title: 'Project',
        type: 'string',
        filter: false
      },
      machine: {
        title: 'Machine',
        type: 'string',
        filter: false
      },
      // runTime: {
      //   title: 'Run Time',
      //   type: 'number',
      //   filter: false
      // },
      plannedProdTime: {
        title: 'Planned Production Time',
        type: 'number',
        filter: false
      },
      idealCycleTime: {
        title: 'Ideal Cycle Time',
        type: 'number',
        filter: false
      },
      goodPartsProduced: {
        title: 'Good Parts Produced',
        type: 'number',
        filter: false
      },
      totalPartsProduced: {
        title: 'Total Parts Produced',
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
    this.source = new ServerDataSource(this.http, {endPoint : 'http://localhost:8080/api/projectsList' })
    console.log(this.source);

}
onCreateConfirm(event):void { 
  var data = {
                "project" : event.newData.project,
                "machine" : event.newData.machine,
                "plannedProdTime" : event.newData.plannedProdTime,
                "idealCycleTime" : event.newData.idealCycleTime,
                "goodPartsProduced" : event.newData.goodPartsProduced,
                "totalPartsProduced" : event.newData.totalPartsProduced,
      
                };
	this.http.post<ProjectsModel>('http://localhost:8080/api/addProject', data).subscribe(
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
  "project" : event.newData.project,
  "machine" : event.newData.machine,
  "plannedProdTime" : event.newData.plannedProdTime,
  "idealCycleTime" : event.newData.idealCycleTime,
  "goodPartsProduced" : event.newData.goodPartsProduced,
  "totalPartsProduced" : event.newData.totalPartsProduced,

  
  };
  console.log(typeof event.newData.brand)
 if (event.newData.project === "") {
  window.confirm('please enter the name of the project')
  
} else if (event.newData.plannedProdTime === "") {

  window.confirm('please enter the reference of the planned production time')
}else if(event.newData.idealCycleTime === "") {
    window.confirm('please enter the department of the ideal cycle time')   
  
  }else {
  if (window.confirm('Do you confirm the changes?')) {
this.http.post<ProjectsModel>('http://localhost:8080/api/updateProject', data).subscribe(
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
    this.http.post<ProjectsModel>('http://localhost:8080/api/deleteProject',event.data).subscribe(
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
    doc.save('projects.pdf')
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