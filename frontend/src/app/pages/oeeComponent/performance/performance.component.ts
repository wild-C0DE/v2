import { Component, ViewChild, ElementRef } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import {HttpErrorResponse} from '@angular/common/http';
import { ServerDataSource } from 'ng2-smart-table';
import * as jsPDF from "jspdf";
import { ngxCsv } from "ngx-csv/ngx-csv";
import * as XLSX from "xlsx";

@Component({
  selector: 'ngx-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent  {
  title = "performance"
  data: any = [];
  fileName = "performance.xlsx";
  source:ServerDataSource;
  
    settings = {
      actions: {
        delete: false,
        add: false,
        edit: false

      },      
      columns: {
        project: {
          title: 'Project',
          type: 'string',
          filter: false
        },
        machine: {
          title: 'Machine',
          type: 'number',
          filter: false
        },
        idealCycleTime :  {
          title: 'Ideal Cycle Time',
          type: 'number',
          filter: false
        },
        goodPartsProduced: {
          title: 'Good Parts Produced',
          type: 'number',
          filter: false
        },
         runTime: {
          title: 'Run Time',
          type: 'number',
          filter: false
        },
        plannedProdTime: {
          title: 'Performance In (%)',
          type: 'number',
          filter: false
        },
       
      },
    };
  
    constructor(private http: HttpClient) {
      //this.source ='data
    }
    ngOnInit(): void {
      this.source = new ServerDataSource(this.http, {endPoint : 'http://localhost:8080/api/performance' })
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
    doc.save("performance.pdf");
  }

  exportexcel(): void {
    let element = document.getElementById("tab");
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    XLSX.writeFile(wb, this.fileName);
  }

}
