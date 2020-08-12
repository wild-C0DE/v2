import { Component} from '@angular/core';
import { NbResetPasswordComponent } from '@nebular/auth';
import { HttpClient } from "@angular/common/http"
import { ActivatedRoute } from '@angular/router';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';

@Component({
  selector: 'ngx-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class NgxResetPasswordComponent extends NbResetPasswordComponent{

  
  
}