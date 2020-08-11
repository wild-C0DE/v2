import { Component, OnDestroy, OnInit,ChangeDetectionStrategy } from '@angular/core';
import {ThemeModule} from '../../theme.module'
import { NbThemeModule } from '@nebular/theme';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { NbAuthJWTToken, NbAuthService, NbTokenService } from '@nebular/auth';
import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NbSidebarModule, NbLayoutModule } from '@nebular/theme';
import {HttpClient} from '@angular/common/http';
import { RouterModule, Routes ,Router} from '@angular/router';
@Component({
  selector: 'ngx-header',
  template: `

  <nb-layout-header fixed>
  <nb-user size="large" status="primary" [name]="user?.fullName[0].toUpperCase()+user?.fullName.slice(1)"></nb-user> <button nbButton status="primary" (click)="logout()"  ghost> <nb-icon icon="log-out-outline"  [options]="{ animation: { type: 'shake' } }"></nb-icon>Logout </button>
</nb-layout-header>


  `
})
export class HeaderComponent implements OnInit {
  //user variable will store the token payload inside of the component
 
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
    this.http.post("http://localhost:8080/haha",{id:this.user.id} ).subscribe((res) =>{;
   this.user=res}
      )
        }
        logout() {
          localStorage.clear();
          this.router.navigate(['/auth/login'])
        }
}






// @Component({
//   selector: 'ngx-header',
//   styleUrls: ['./header.component.scss'],
//   templateUrl: './header.component.html',
// })
// export class HeaderComponent implements OnInit, OnDestroy {

//   private destroy$: Subject<void> = new Subject<void>();
//   userPictureOnly: boolean = false;
//   user: any;

//   themes = [
//     {
//       value: 'default',
//       name: 'Light',
//     },
//     {
//       value: 'dark',
//       name: 'Dark',
//     },
//     {
//       value: 'cosmic',
//       name: 'Cosmic',
//     },
//     {
//       value: 'corporate',
//       name: 'Corporate',
//     },
//   ];

//   currentTheme = 'default';

//   userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];

//   constructor(private sidebarService: NbSidebarService,
//               private menuService: NbMenuService,
//               private themeService: NbThemeService,
//               private userService: UserData,
//               private layoutService: LayoutService,
//               private breakpointService: NbMediaBreakpointsService) {
//   }

//   ngOnInit() {
//     this.currentTheme = this.themeService.currentTheme;

//     this.userService.getUsers()
//       .pipe(takeUntil(this.destroy$))
//       .subscribe((users: any) => this.user = users.nick);

//     const { xl } = this.breakpointService.getBreakpointsMap();
//     this.themeService.onMediaQueryChange()
//       .pipe(
//         map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
//         takeUntil(this.destroy$),
//       )
//       .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

//     this.themeService.onThemeChange()
//       .pipe(
//         map(({ name }) => name),
//         takeUntil(this.destroy$),
//       )
//       .subscribe(themeName => this.currentTheme = themeName);
//   }

//   ngOnDestroy() {
//     this.destroy$.next();
//     this.destroy$.complete();
//   }

//   changeTheme(themeName: string) {
//     this.themeService.changeTheme(themeName);
//   }

//   toggleSidebar(): boolean {
//     this.sidebarService.toggle(true, 'menu-sidebar');
//     this.layoutService.changeLayoutSize();

//     return false;
//   }

//   navigateHome() {
//     this.menuService.navigateHome();
//     return false;
//   }
// }
