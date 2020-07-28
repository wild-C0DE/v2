import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {HttpErrorResponse} from '@angular/common/http';
import { ServerDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-synthesis',
  templateUrl: './synthesis.component.html',
  styleUrls: ['./synthesis.component.scss']
})
export class SynthesisComponent  {
  title = "synthesis"
  source:ServerDataSource;
  
    settings = {
      actions: {
        delete: false,
        add: false,
        edit: false

      },      
      columns: {
        totalTime :  {
          title: 'total maintenance duration',
          type: 'number',
        },
        correctionTime: {
          title: 'correction maintenance duration',
          type: 'number',
        },
        ratio: {
          title: 'Ratio',
          type: 'number',
        },
        // totalTime: {
        //   title: 'total duration of maintenance',
        //   type: 'string',
        // },
        
        
      },
    };
  
    constructor(private http: HttpClient) {
      //this.source ='data
    }
    ngOnInit(): void {
      this.source = new ServerDataSource(this.http, {endPoint : 'http://localhost:8080/api/synthesis' })
      console.log(this.source);
   
  }

}
