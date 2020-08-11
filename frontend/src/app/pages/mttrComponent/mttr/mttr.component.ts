import { Component, ViewChild, ElementRef } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import {HttpErrorResponse} from '@angular/common/http';
import { ServerDataSource } from 'ng2-smart-table';
import * as jsPDF from "jspdf";
import { ngxCsv } from "ngx-csv/ngx-csv";
import * as XLSX from "xlsx";
// import { SmartTableDatepickerComponent, SmartTableDatepickerRenderComponent } from '../smart-table-datepicker/smart-table-datepicker.component'

@Component({
  selector: 'ngx-mttr',
  templateUrl: './mttr.component.html',
  styleUrls: ['./mttr.component.scss']
})
export class MTTRComponent  {
  title = "mttr-synthesis"
  data: any = [];
  fileName = "MTTR.xlsx";
  source:ServerDataSource;
  
    settings = {
      hideSubHeader: true,
      actions: {
        delete: false,
        add: false,
        edit: false

      },      
      columns: {
        _id :  {
          title: 'Machine',
          type: 'number',
          filter: false
        },
        totalMaintenanceTime :  {
          title: 'Total Maintenance Time',
          type: 'number',
          filter: false
        },
        same_machine: {
          title: 'Total Number Of Repair',
          type: 'number',
          filter: false
        },
        MTTR: {
          title: 'MTTR',
          type: 'number',
          filter: false
        },
        
       
      },
    };
  
    constructor(private http: HttpClient) {
      //this.source ='data
    }
    ngOnInit(): void {
      console.log('il = m here+')
      this.source = new ServerDataSource(this.http, {endPoint : 'http://localhost:8080/api/mttr' })
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
    doc.save("MTTR.pdf");
  }

  exportexcel(): void {
    let element = document.getElementById("tab");
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    XLSX.writeFile(wb, this.fileName);
  }

}
