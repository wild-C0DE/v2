import { Component, ViewChild, ElementRef } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import {HttpErrorResponse} from '@angular/common/http';
import { ServerDataSource } from 'ng2-smart-table';
import { Addwork } from '../../work-order/addwork.model'
import * as jsPDF from "jspdf";
import { ngxCsv } from "ngx-csv/ngx-csv";
import * as XLSX from "xlsx";

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './prevention.component.html',
  styleUrls: ['./prevention.component.scss'],
})
export class PreventionComponent {
  title = "prevention"
  data: any = [];
  fileName = "Prevention.xlsx";
  source:ServerDataSource;
  settings = {
    hideSubHeader: true,
    actions: {
      delete: false,
      add: false,
      edit: false

    },
    columns: {
      machine: {
        title: 'Machine',
        type: 'string',
      },
      nameOfTheIntervention: {
        title: 'Name Of The Intervention',
        type: 'string',
      },
      date: {
        title: 'Date',
        type: 'number',
      },
      manager: {
        title: 'Manager',
        type: 'string',
      },
      duration: {
        title: 'Duration hours',
        type: 'string',
      },
      // costHours: {
      //   title: 'Cost Hours',
      //   type: 'string',
      // },
      agentName: {
        title: 'Agent Name',
        type: 'string',
      },
      department: {
        title: 'Department',
        type: 'number',
      },
    },
  };

  constructor(private http: HttpClient) {
    //this.source ='data
  }
  ngOnInit(): void {
    this.source = new ServerDataSource(this.http, {endPoint : 'http://localhost:8080/api/preventionList' })
    console.log(this.source);
 
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
    doc.save("Prevention.pdf");
  }

  exportexcel(): void {
    let element = document.getElementById("tab");
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    XLSX.writeFile(wb, this.fileName);
  }
}
