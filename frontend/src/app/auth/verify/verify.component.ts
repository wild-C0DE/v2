import { Component, OnInit } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import { HttpClient } from "@angular/common/http"
import { RouterModule, Routes ,Router} from '@angular/router';

@Component({
  selector: 'ngx-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit{
  token: string;
  constructor(private route: ActivatedRoute, private http : HttpClient, private router : Router) { }
  
  ngOnInit() {
    console.log(this.route.queryParams)
    this.route.queryParams
      .filter(params => params.token)
      .subscribe(params => {
        console.log(params.token); // { order: "popular" }
        this.token = params.token
        
      }
    
    );
  }
  onSubmit(){
    
    console.log(this.token)
   this.http.post("http://localhost:8080/auth/verify-email",{token:this.token} ).subscribe(
   
   )
   this.router.navigate(['/auth/login'])
  }
}
class Helper {
  token:string
}