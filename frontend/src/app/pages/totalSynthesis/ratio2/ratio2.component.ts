import { Component, ViewChild, ElementRef } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import {HttpErrorResponse} from '@angular/common/http';
import { ServerDataSource } from 'ng2-smart-table';
import * as jsPDF from "jspdf";
import { ngxCsv } from "ngx-csv/ngx-csv";
import * as XLSX from "xlsx";

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './ratio2.component.html',
  styleUrls: ['./ratio2.component.scss'],
})
export class Ratio2Component {
  title = "Ratio2"
  data: any = [];
  fileName = "ratio2.xlsx";
  source:ServerDataSource;
  
    settings = {
      hideSubHeader: true,
      actions: {
        delete: false,
        add: false,
        edit: false

      },      
      columns: {
        totalTime :  {
          title: 'Total Maintenance Duration',
          type: 'number',
        },
        correctionTime: {
          title: 'Correction Maintenance Duration',
          type: 'number',
        },
        preventionTime: {
          title: 'Prevention Maintenance Duration',
          type: 'number',
        },
        // ratio1: {
        //   title: 'Ratio 1 : correction action duration over total actions',
        //   type: 'number',
        // },
        ratio2: {
          title: 'Ratio ',
          type: 'number',
        },
        // ratio3: {
        //   title: 'Ratio 3 : cost prevention action',
        //   type: 'number',
        // },
        // ratio4: {
        //   title: 'Ratio 4 : cost corrrection action',
        //   type: 'number',
        // },
        // ratio5: {
        //   title: 'Ratio 5 : cost total action',
        //   type: 'number',
        // }
       
      },
    };
  
    constructor(private http: HttpClient) {
      //this.source ='data
    }
    ngOnInit(): void {
      this.source = new ServerDataSource(this.http, {endPoint : 'http://localhost:8080/api/synthesis' })
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
