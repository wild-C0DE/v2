import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule, NbListModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {   NbButtonModule,} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './totalSynthesis-routing.module';
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
    NbButtonModule
  ],
  declarations: [
    ...routedComponents,
   
  ],
})
export class TablesModule { }
