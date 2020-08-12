import { Component, OnInit } from '@angular/core';
//import { AuthService } from './auth.service';
import { NbAuthJWTToken, NbAuthService} from '@nebular/auth';
import {HttpClient} from '@angular/common/http';
import { Router} from '@angular/router';
@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: any = {};
  constructor(private authService: NbAuthService, private http: HttpClient, private router : Router) {

    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable 
        }
        
      })  
  }
  ngOnInit() {
    this.http.post("http://localhost:8080/haha",{id:this.user.id} ).subscribe((res) =>{
      
   this.user=res}
      )
        }
  // constructor(public authService: AuthService) {}

  // ngOnInit() {
  //   this.authService.getProfile().subscribe(
  //     data => {
  //       this.user = data.user;
  //     },
  //     err => {
  //       console.log(err);
  //       return false;
  //     }
  //   );
  // }
}
