import { Component, OnInit } from '@angular/core';
import { NbResetPasswordComponent } from '@nebular/auth';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import { HttpClient } from "@angular/common/http"
import { RouterModule, Routes ,Router} from '@angular/router';
import { log } from 'console';
import { NbAuthResult, NbAuthService } from '@nebular/auth';


@Component({
  selector: 'ngx-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class NgxResetPasswordComponent extends NbResetPasswordComponent {
}