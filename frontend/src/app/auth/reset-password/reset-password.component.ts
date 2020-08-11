import { Component} from '@angular/core';
import { NbResetPasswordComponent } from '@nebular/auth';
import { HttpClient } from "@angular/common/http"
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'ngx-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class NgxResetPasswordComponent extends NbResetPasswordComponent{

  
  ngOnInit() {
    this.user.token="bcd4ea2ca8b78c35d3829394b6e109e2969cbd8ccbea11a8abda0b036558b7566b201fa46d700baa"
      }
    
  
  
  
 
}