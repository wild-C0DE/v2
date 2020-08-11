import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule, NbListModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {   NbButtonModule,NbDatepickerModule,  NbActionsModule,

  NbCheckboxModule,

  NbRadioModule,
  NbSelectModule,
  NbUserModule} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './machines-routing.module';
import {DatepickerComponent} from './datepicker/datepicker.component'
//import { ExportModule } from '../exports/exports.component';
//import { FsIconComponent } from './prevention/prevention.component';

@NgModule({
  imports: [
    NbCardModule, 
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    NbListModule,
    NbButtonModule,
    NbDatepickerModule,
    NbActionsModule,
    NbCheckboxModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule
  ],
  declarations: [
    ...routedComponents,
    DatepickerComponent
    
   
  ],
})
export class TablesModule { }
