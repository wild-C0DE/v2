import { Component,ViewChild, ElementRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ServerDataSource } from "ng2-smart-table";
import { HttpErrorResponse } from "@angular/common/http";
import * as jsPDF from "jspdf";
import { ngxCsv } from "ngx-csv/ngx-csv";
import * as XLSX from "xlsx";
import { Addwork } from "../addwork.model";
@Component({
  selector: 'ngx-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.scss']
})
export class InterventionComponent  {
  data: any = [];
  fileName = "Interventions History.xlsx";
  source: ServerDataSource;
  settings = {
    hideSubHeader: true,
    actions: {
      delete: false,
      add: false,
      edit: false

    },
    columns: {
      numberOrder: {
        title: "Number Order",
        type: "number",
        filter: false,
      },
    
      date: {
        title: "Date",
        type: "number",
        filter: false,
      },
      nameOfTheIntervention: {
        title: "Name Of Intervention",
        type: "string",
        filter: false,
      },
      typeOfIntervention: {
        title: "Type Of Intervention",
        type: "string",
        filter: false,
      },
      // state: {
      //   title: "State",
      //   type: "string",
      //   filter: false,
      // },
      machine: {
        title: "Machine",
        type: "string",
        filter: false,
      },
      manager: {
        title: "Manager",
        type: "string",
        filter: false,
      },
      effectiveDuration: {
        title: "Effective Duration",
        type: "number",
        filter: false,
      },      
      agentName: {
        title: "Agent Name",
        type: "string",
        filter: false,
      },
     
      department: {
        title: "Department",
        type: "string",
        filter: false,
      },
      equipmentUsed: {
        title: "Spare Parts Used",
        type: "number",
        filter: false,
      },
      

    }
  };

  ngOnInit(): void {
    this.source = new ServerDataSource(this.http, {
      endPoint: "http://localhost:8080/api/interventionsHistory",
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
