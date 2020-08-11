
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
      </nb-card-body>
    </nb-card>
   
  `,
})
export class ReportsComponent {
}
