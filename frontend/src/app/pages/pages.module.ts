import { NgModule } from '@angular/core';
import { NbMenuModule, NbDatepickerModule,NbUserModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ActiveListComponent } from './active-list/active-list.component';
@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    
    MiscellaneousModule,
    NbDatepickerModule,
    NbUserModule,
    CommonModule
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
 
}
