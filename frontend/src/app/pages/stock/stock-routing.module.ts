import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './stock.component';
import { StockTableComponent } from './stock-table/stock-table.component';
import { ReportsComponent } from './reports/reports.component';
import { TrafficRevealCardComponent } from './traffic-reveal-card/traffic-reveal-card.component';

const routes: Routes = [{
  path: '', 
  component: TablesComponent,
  children: [
    { 
      path: 'stock-table', 
      component: StockTableComponent,
    },
    {
      path: 'reports',
      component: ReportsComponent,
    },
    {
      path: 'stock-chart',
      component: TrafficRevealCardComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  StockTableComponent,
  ReportsComponent,
  TrafficRevealCardComponent
];
