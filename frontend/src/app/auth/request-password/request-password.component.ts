import { Component, OnInit } from '@angular/core';
import { NbRequestPasswordComponent } from '@nebular/auth';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import { HttpClient } from "@angular/common/http"
import { RouterModule, Routes ,Router} from '@angular/router';
@Component({
  selector: 'ngx-request-password',
  templateUrl: './request-password.component.html',
  styleUrls: ['./request-password.component.scss']
})
export class NgxRequestPasswordComponent extends NbRequestPasswordComponent {

}