import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule, NbListModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './work-order-routing.module';
// import { MultiSelComponent } from './workorder/multi-sel/multi-sel.component';
//import { ExportModule } from '../exports/exports.component';
//import { FsIconComponent } from './prevention/prevention.component';

import {
  NbActionsModule,
  NbButtonModule,
 
  NbCheckboxModule,
  NbDatepickerModule, 

  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import {NgxPrintModule} from 'ngx-print';
import { FormsModule as ngFormsModule } from '@angular/forms';


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
    NgxPrintModule,
    NbCardModule, 
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    NbListModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbRadioModule,
    ngFormsModule,
    NbButtonModule,
 
    NbCheckboxModule,
    NbIconModule,
   
  ],
  declarations: [
    ...routedComponents,
    // MultiSelComponent,
   
  ],
})
export class TablesModule { }
