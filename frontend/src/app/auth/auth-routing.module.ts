import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbAuthComponent } from '@nebular/auth'; 
import { NgxLoginComponent } from './login/login.component';
import { NgxRegisterComponent } from './register/register.component';
import {VerifyComponent} from "./verify/verify.component"
export const routes: Routes = [
	{
	  path: '',
	  component: NbAuthComponent,
	  children: [
		{
		  path: 'login',
		  component: NgxLoginComponent, // <---
		},
		{
			path: 'register',
			component: NgxRegisterComponent, // <---
		  },
		  {
			path: 'verify-email',
			component: VerifyComponent, // <---
		  },
	  ],
	},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class NgxAuthRoutingModule {
}