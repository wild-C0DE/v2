import { Component, ViewChild, ElementRef } from '@angular/core'
import { HttpClient } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";
import { ServerDataSource } from "ng2-smart-table";
import { WorkersModel } from "./worker.model";
import * as jsPDF from "jspdf";
import { ngxCsv } from "ngx-csv/ngx-csv";
import * as XLSX from "xlsx";
@Component({
  selector: "ngx-smart-table",
  templateUrl: "./worker.component.html",
  styleUrls: ["./worker.component.scss"],
})


export class WorkerComponent {
  title = "worker";
  data: any = [];
  fileName = "Workers.xlsx";
  source: ServerDataSource;
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
      registrationNumber: {
        title: "Registration Number",
        type: "string",
      },
      name: {
        title: "name",
        type: "string",
      },
      socialSecurity: {
        title: "Social Security",
        type: "string",
      },
      adress: {
        title: "Adress",
        type: "string",
      },
      occupation: {
        title: "Occupation",
        type: "string",
      },
      dateOfEmployment: {
        title: "Date Of Employment",
        type: "string",
      },
      annuelSalary: {
        title: "Annuel Salary",
        type: "string",
      },
      regularHourlyRate: {
        title: "Regular Hourly Rate",
        type: "number",
      },
      hourlyOvertimeRate: {
        title: "Hourly Overtime Rate",
        type: "number",
      },
    },
  };

  constructor(private http: HttpClient) {
    //this.source ='data
  }
  ngOnInit(): void {
    this.source = new ServerDataSource(this.http, {
      endPoint: "http://localhost:8080/api/workersList",
    });
    console.log(this.source);
  }

  onCreateConfirm(event): void {
    var data = {
      registrationNumber: event.newData.registrationNumber,
      name: event.newData.name,
      socialSecurity: event.newData.socialSecurity,
      adress: event.newData.adress,
      occupation: event.newData.occupation,
      dateOfEmployment: event.newData.dateOfEmployment,
      annuelSalary: event.newData.annuelSalary,
      regularHourlyRate: event.newData.regularHourlyRate,
      hourlyOvertimeRate: event.newData.hourlyOvertimeRate,
    };
    if (event.newData.name === "") {
      window.confirm("please enter the name of the employee");
    } else if (event.newData.registrationNumber === "") {
      window.confirm("please enter the Registration Number");
    }else {
      this.http
        .post<WorkersModel>("http://localhost:8080/api/workerAdd", data)
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
      registrationNumber: event.newData.registrationNumber,
      name: event.newData.name,
      socialSecurity: event.newData.socialSecurity,
      adress: event.newData.adress,
      occupation: event.newData.occupation,
      dateOfEmployment: event.newData.dateOfEmployment,
      annuelSalary: event.newData.annuelSalary,
      regularHourlyRate: event.newData.regularHourlyRate,
      hourlyOvertimeRate: event.newData.hourlyOvertimeRate,
    };

    if (event.newData.name === "") {
      window.confirm("please enter the name of the employee");
    } else if (event.newData.registrationNumber === "") {
      window.confirm("please enter the Registration Number");
    } else {
      if (window.confirm("Do you confirm the changes?")) {
        this.http
          .post<WorkersModel>("http://localhost:8080/api/workerUpdate", data)
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
        .post<WorkersModel>(
          "http://localhost:8080/api/workerDelete",
          event.data
        )
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
    doc.save("Workers.pdf");
  }

  exportexcel(): void {
    let element = document.getElementById("tab");
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    XLSX.writeFile(wb, this.fileName);
  }
}
