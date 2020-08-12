import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule, NbListModule,NbButtonModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './projects-routing.module';
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
