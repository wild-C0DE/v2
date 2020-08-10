
import { Component} from '@angular/core';


@Component({
  selector: 'ngx-tiny-mce-page',
  template: `
    <nb-card  #content>
     
      <nb-card-body>
      <h6>
      Report
    </h6>
        <ngx-tiny-mce2></ngx-tiny-mce2>
      </nb-card-body>
      <nb-card-body>
      <button nbButton status="danger" (click)="save()" ghost>Save</button>
      <button nbButton status="danger" (click)="send()" ghost>Send as Email</button>
      </nb-card-body>
    </nb-card>
   
  `,
})
export class ReportsComponent {


  save() {

  }
  send() {
  
  }

}
