import { Component, ViewChild, ElementRef } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ServerDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import {HttpClient} from '@angular/common/http';
import * as jsPDF from 'jspdf'
import { ngxCsv } from 'ngx-csv/ngx-csv';
import * as XLSX from 'xlsx';


@Component({
  selector: 'ngx-smart-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.scss'],
})
export class StockTableComponent {
  data:any = [];
  too: any = "";
  fileName= 'ExcelSheet.xlsx';
   
  source: ServerDataSource; 
  settings = { 
    hideSubHeader: true,
    actions: {
      add: false,
      delete: false,
      edit: false
      },
      
    columns: {
      tool: {
        title: 'Tool',
        type: 'html',
        
      },
      name: {
        title: 'Name',
        type: 'string',
        filter: false,
      },
      reference: {
        title: 'Reference',
        type: 'list',
      config: {
        list: [{value: '1', title: 'Lion King'}, {title: 'The Matrix', value: '2'}]
      },
        filter: false,

      },
      price: {
        title: 'Price',
        type: 'Number',
        filter: false,
      },
      lifetime :{
        title: 'Lifetime In Hours',
        type: 'Number',
        filter: false,
      }, 
      security: {
        title: 'Security Stock',
        type: 'Number',
        filter: false,
      },
      
      
      min: {
        title: 'Min',
        type: 'Number',
        filter: false,
      },
      max: {
        title: 'Max',
        type: 'number',
        filter: false,
      },
    },
    
      rowClassFunction : function(row){
        //console.log('row ', typeof row.data.min)
            if(row.data.min - row.data.security <= 1) return "empty";
            else if(row.data.min - row.data.security >= 2) return "full"
            return "medium";
      }
   
    // rowClassFunction: (row) =>{
    //   if (row.data.min <4) {
    //     return 'aborted';
    //   } else if (row.data.min >5) {
    //     return 'solved';
    //   }
    //   return '';
    // },
  };

  
  
    


  ngOnInit(): void {
    this.source = new ServerDataSource(this.http, { endPoint: "http://localhost:8080/stock", });

  }
 

  constructor(private http: HttpClient) {
    
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
      'elementHandlers': specialElementHandlers,
      'theme': 'grid' 
    });
    // doc.autoTable({ html: '#print-section' })
    doc.save('stock.pdf')
    
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
  exportexcel(): void 
  {
     /* table id is passed over here */   
     let element = document.getElementById('print-section'); 
     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

     /* generate workbook and add the worksheet */
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

     /* save to file */
     XLSX.writeFile(wb, this.fileName);
    
  }
 
}
  

