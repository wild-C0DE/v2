import { Component, ViewChild, ElementRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";
import { ServerDataSource } from "ng2-smart-table";
import { MachinModel } from "./machin-model.model";
import * as jsPDF from "jspdf";
import { ngxCsv } from "ngx-csv/ngx-csv";
import * as XLSX from "xlsx";
import {DatepickerComponent} from '../datepicker/datepicker.component'
import * as moment from 'moment';
@Component({
  selector: "ngx-smart-table",
  templateUrl: "./machine.component.html",
  styleUrls: ["./machine.component.scss"],
})
export class MachineComponent {
  
  title = "machine";
  data: any = [];
  fileName = "Machines.xlsx";
  source: ServerDataSource;
 
  constructor(private http: HttpClient) {
    
    // this.dataSource = this.source
  }
 

  settings = {
    
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      uploadImageButton:
        '<i type="file" class="custom-file-input" id="inputGroupFile01>  ',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: "Name",
        type: "string",
        filter: false
      },
      reference: {
        title: "Reference",
        type: "string",
        filter: false
      },
      state: {
        title: "State",
        placeholder:"Select ...",
        filter: false,
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
           
            list: [
              {value: 'Active', title:'Active'},
              {value: 'Inactive', title:'Inactive'},             
             
            ],
          },
        
        }
      },
      brand: {
        title: "Brand",
        type: "string",
        filter: false
      },
      supplierName: {
        title: "Supplier Name",
        type: "string",
        filter: false
      },
      supplierContact: {
        title: "Supplier Contact",
        type: "string",
        filter: false
      },
      serialNumber: {
        title: "Serial Number",
        type: "number",
        filter: false
      },
      dateOfPurchase: {
        title: "Date Of Purchase",
        type: 'html',
        //renderComponent: DatepickerComponent,
        editor: {
          type: 'custom',
          component: DatepickerComponent,
        },
        filter: false
      },
      inventory: {
        title: "Inventory",
        type: "number",
        filter: false
      },
      isbn: {
        title: "ISBN",
        type: "string",
        filter: false
      },
      oprationalTimePerDay: {
        title: "Operational Time Per Day",
        type: "string",
        filter: false
      },
      operationalDays: {
        title: "Operational Days Per Month",
        type: "string",
        filter: false
      },
      department: {
        title: "Department",
        placeholder:"Select ...",
        filter: false,
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
           
            list: [
              {value: 'Production', title:'Production'},
              {value: 'Commercial', title:'Commercial'},  
              {value: 'Maintenance', title:'Maintenance'},
              {value: 'Quality', title:'Quality'},          
             
            ],
          },
        
        }
        
      },
      cost: {
        title: "Cost",
        type: "number",
        filter: false
      },
      comment: {
        title: "Comment",
        type: "string",
        filter: false
      },
    },
  };

 
  ngOnInit(): void {
    this.source = new ServerDataSource(this.http, {
      endPoint: "http://localhost:8080/api/machineList",
    });
    
  }

  onCreateConfirm(event): void {
    var data = {
      name: event.newData.name,
      reference: event.newData.reference,
      // family: event.newData.family,
      state: event.newData.state,
      brand: event.newData.brand,
      supplierName: event.newData.supplierName,
      supplierContact: event.newData.supplierContact,
      serialNumber: event.newData.serialNumber,
      dateOfPurchase: moment("2016-05-12").format("YYYY-MM-DD"),
      inventory: event.newData.inventory,
      isbn: event.newData.isbn,
      oprationalTimePerDay: event.newData.oprationalTimePerDay,
      operationalDays: event.newData.operationalDays,
      department: event.newData.department,
      cost: event.newData.cost,
      // "image" : event.newData.image,
      comment: event.newData.comment,
    };
    if (event.newData.name === "") {
      window.confirm("please enter the name of the machin");
    } else if (event.newData.reference === "") {
      window.confirm("please enter the reference of the machin");
    } else if (event.newData.department === "") {
      window.confirm("please enter the department of the machin");
    } else {
      this.http
        .post<MachinModel>("http://localhost:8080/api/addMachine", data)
        .subscribe(
          (res) => {
            console.log(res);
            event.confirm.resolve(event.newData);
          },
          (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
              console.log("Client-side error occured.");
            } else {
              console.log("Server-side error occured.");
            }
          }
        );
    }
  }

  onSaveConfirm(event): void {
    var data = {
      helper: event.data._id,
      name: event.newData.name,
      reference: event.newData.reference,
      // family: event.newData.family,
      state: event.newData.state,
      brand: event.newData.brand,
      supplierName: event.newData.supplierName,
      supplierContact: event.newData.supplierContact,
      serialNumber: event.newData.serialNumber,
      dateOfPurchase: moment("2020-11-08  ").format("YYYY-MM-DD"),
      inventory: event.newData.inventory,
      isbn: event.newData.isbn,
      oprationalTimePerDay: event.newdata.oprationalTimePerDay,
      operationalDays:event.newdata.operationalDays,
      department: event.newData.department,
      cost: event.newData.cost,
      // "image" : event.newData.image,
      comment: event.newData.comment,
    };
    console.log(typeof event.newData.serialNumber);
    if (event.newData.name === "") {
      window.confirm("please enter the name of the machin");
    } else if (event.newData.reference === "") {
      window.confirm("please enter the reference of the machin");
    } else if (event.newData.department === "") {
      window.confirm("please enter the department of the machin");
    } else {
      if (window.confirm("Do you confirm the changes?")) {
        this.http
          .post<MachinModel>("http://localhost:8080/api/updateMachin", data)
          .subscribe(
            (res) => {
              console.log(res);
              event.confirm.resolve(event.newData);
            },
            (err: HttpErrorResponse) => {
              if (err.error instanceof Error) {
                console.log("Client-side error occured.");
              } else {
                console.log("Server-side error occured.");
              }
            }
          );
        location.reload();
      } else {
        event.confirm.reject();
      }
    }
  }
  onDeleteConfirm(event): void {
    console.log(event.data);

    if (window.confirm("Are you sure you want to delete?")) {
      this.http
        .post<MachinModel>("http://localhost:8080/api/deleteMachin", event.data)
        .subscribe(
          (res) => {
            console.log(res);
            event.confirm.resolve(event.source.data);
          },
          (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
              console.log("Client-side error occured.");
            } else {
              console.log("Server-side error occured.");
            }
          }
        );
    } else {
      event.confirm.reject();
    }
  }

  @ViewChild("content") content: ElementRef;

  public downloadPDF() {
    var doc = new jsPDF("l", "pt", "letter");

    let specialElementHandler = {
      "#editor": function (element, renderer) {
        return true;
      },
    };

    let content = this.content.nativeElement;
    let margins = {
      top: 15,
      bottom: 60,
      left: 70,
      width: 190,
    };

    doc.setFontSize(50);
    doc.setFont("helvetica");
    doc.setTextColor(10);
    doc.fromHTML(content, margins.left, margins.top, {
      width: margins.width,

      elementHandlers: specialElementHandler,
    });
    doc.output("dataurlnewwindow");
    doc.save("Machines.pdf");
  }

  exportexcel(): void {
    let element = document.getElementById("tab");
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    XLSX.writeFile(wb, this.fileName);
  }

   
}
