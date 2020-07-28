import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule, NbChatModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {NbButtonModule,} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './stock-routing.module';
import { FsIconComponent } from './reports/reports.component';
import {NgxPrintModule} from 'ngx-print';



@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule, 
    ThemeModule, 
    TablesRoutingModule,
    Ng2SmartTableModule,
    NbButtonModule,
    NgxPrintModule,
    NbChatModule
  ],
  declarations: [
    ...routedComponents,
    FsIconComponent,
  ],
})
export class TablesModule { }
