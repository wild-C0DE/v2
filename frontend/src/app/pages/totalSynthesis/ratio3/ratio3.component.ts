import { Component, ViewChild, ElementRef } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import {HttpErrorResponse} from '@angular/common/http';
import { ServerDataSource } from 'ng2-smart-table';
import * as jsPDF from "jspdf";
import { ngxCsv } from "ngx-csv/ngx-csv";
import * as XLSX from "xlsx";

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './ratio3.component.html',
  styleUrls: ['./ratio3.component.scss'],
})
export class Ratio3Component {
  title = "Ratio3"
  data: any = [];
  fileName = "ratio3.xlsx";
  source:ServerDataSource;
  
    settings = {
      hideSubHeader: true,
      actions: {
        delete: false,
        add: false,
        edit: false

      },      
      columns: {
        // totalTime :  {
        //   title: 'total maintenance duration',
        //   type: 'number',
        // },
        // correctionTime: {
        //   title: 'correction maintenance duration',
        //   type: 'number',
        // },
        // preventionTime: {
        //   title: 'prevention maintenance duration',
        //   type: 'number',
        // },
        // ratio1: {
        //   title: 'Ratio 1 : correction action duration over total actions',
        //   type: 'number',
        // },
        // ratio2: {
        //   title: 'Ratio 2 : prevention action duration over total actions',
        //   type: 'number',
        // },
        ratio3: {
          title: 'Cost Prevention Action',
          type: 'number',
        },
        // ratio4: {
        //   title: 'Ratio 4 : cost corrrection action',
        //   type: 'number',
        // },
        ratio5: {
          title: 'Cost Total Action',
          type: 'number',
        },
        ratio6: {
          title: 'Ratio ',
          type: 'number',
        }

       
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
