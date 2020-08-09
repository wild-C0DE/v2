import { Component,ViewChild, ElementRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ServerDataSource } from "ng2-smart-table";
import { HttpErrorResponse } from "@angular/common/http";
import * as jsPDF from "jspdf";
import { ngxCsv } from "ngx-csv/ngx-csv";
import * as XLSX from "xlsx";

@Component({
  selector: 'ngx-intervention',
  templateUrl: './tableRatio1.component.html',
  styleUrls: ['./tableRatio1.component.scss']
})
export class TableRatiosComponent  {
  data: any = [];
  fileName = "Ratios Table.xlsx";
  source: ServerDataSource;
  settings = {
    hideSubHeader: true,
    actions: {
      delete: false,
      add: false,
      edit: false

    },
    columns: {
     
    
      date: {
        title: "Date",
        type: "string",
        filter: false,
      },      
      ratio1: {
        title: "Ratio 1",
        type: "number",
        filter: false,
      },
      ratio2: {
        title: "Ratio 2",
        type: "number",
        filter: false,
      },
      ratio3: {
        title: "Ratio 3",
        type: "number",
        filter: false,
      },      
      ratio4: {
        title: "Ratio 4",
        type: "number",
        filter: false,
      },  
      

    }
  };

  ngOnInit(): void {
    this.source = new ServerDataSource(this.http, {
      endPoint: "http://localhost:8080/api/ratioTable",
    });
    console.log(this.source);
  }

  constructor(private http: HttpClient) {
    //this.source. = 'data';
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
    doc.save("Synthesis.pdf");
  }

  exportexcel(): void {
    let element = document.getElementById("tab");
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    XLSX.writeFile(wb, this.fileName);
  }
}
