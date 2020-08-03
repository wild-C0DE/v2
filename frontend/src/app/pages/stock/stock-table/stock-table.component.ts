import { Component, ViewChild, ElementRef } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ServerDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import {HttpClient} from '@angular/common/http';
import * as jsPDF from 'jspdf';
import { ngxCsv } from 'ngx-csv/ngx-csv';


@Component({
  selector: 'ngx-smart-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.scss'],
})
export class StockTableComponent {
  data:any = [];
  source: ServerDataSource; 
  settings = {
    hideSubHeader: true,
    actions: {
      add: false,
      delete: false,
      edit: false
      },
    columns: {
     
      name: {
        title: 'Name',
        type: 'string',
        filter: false
      },
      reference: {
        title: 'Reference',
        type: 'string',
        filter: false
      },
      security: {
        title: 'Security Stock',
        type: 'Number',
        filter: false
      },
      min: {
        title: 'Min',
        type: 'Number',
        filter: false
      },
      max: {
        title: 'Max',
        type: 'number',
        filter: false
      },
    },
  };

  
  
    


  ngOnInit(): void {
    this.source = new ServerDataSource(this.http, { endPoint: "http://localhost:8080/stock", });
          console.log('this.source: ', this.source);
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
      'elementHandlers': specialElementHandlers
    });
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
  
}
