import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule, NbChatModule,NbSelectModule, NbProgressBarModule,   NbButtonModule,
  NbTabsetModule,
  NbUserModule, 
  NbListModule,} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './stock-routing.module';
//import { FsIconComponent } from './reports/reports.component';
import {NgxPrintModule} from 'ngx-print';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TrafficRevealCardComponent } from './traffic-reveal-card/traffic-reveal-card.component';
import { TrafficBarComponent } from './traffic-reveal-card/front-side/traffic-bar/traffic-bar.component';
import { TrafficFrontCardComponent } from './traffic-reveal-card/front-side/traffic-front-card.component';
import { TrafficCardsHeaderComponent } from './traffic-reveal-card/traffic-cards-header/traffic-cards-header.component';
import { TrafficBackCardComponent } from './traffic-reveal-card/back-side/traffic-back-card.component';
import { TrafficBarChartComponent } from './traffic-reveal-card/back-side/traffic-bar-chart.component';
import {TinyMCEComponent2} from './reports/tiny-mce.component'

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
    NbChatModule,
    NbSelectModule,
    NbProgressBarModule,
    NbTabsetModule,
    NbUserModule,
    NbListModule,
    NgxEchartsModule,
    NgxChartsModule
  ],
  declarations: [
    ...routedComponents,
 
    TrafficRevealCardComponent,
    TrafficBarChartComponent,
    TrafficFrontCardComponent,
    TrafficBackCardComponent,
    TrafficBarComponent,
    TrafficCardsHeaderComponent,
    TinyMCEComponent2
  ],
})
export class TablesModule { }
