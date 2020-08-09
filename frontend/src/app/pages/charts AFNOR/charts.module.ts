import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';

import { ChartsRoutingModule, routedComponents } from './charts-routing.module';

import { EchartsBarComponent } from './echarts/echarts-bar.component';
import { EchartsBarComponent2 } from './echarts/echarts-bar2.component';
import { EchartsBarComponent3 } from './echarts/echarts-bar3.component';
import { EchartsBarComponent4 } from './echarts/echarts-bar4.component';


const components = [

  
  EchartsBarComponent,
  EchartsBarComponent2,
  EchartsBarComponent4,
  EchartsBarComponent3,
];

@NgModule({
  imports: [
    ThemeModule,
    ChartsRoutingModule,
    NgxEchartsModule,
    NgxChartsModule,
    ChartModule,
    NbCardModule,
  ],
  declarations: [...routedComponents, ...components],
})
export class ChartsModule {}
