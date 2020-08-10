import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './oee-synthese.component';
import { OEEComponent } from './oee/oee.component';
import { AvailabilityComponent } from './availability/availability.component'
import { PerformanceComponent } from './performance/performance.component'
import { QualityComponent } from './quality/quality.component'

const routes: Routes = [{
  path: '', 
  component: TablesComponent,
  children: [
    {
      path: 'oee-synthesis',
      component: OEEComponent,
    },
    {
      path: 'availability',
      component: AvailabilityComponent,
    },
    {
      path: 'performance',
      component: PerformanceComponent,
    },
    {
      path: 'quality',
      component: QualityComponent,
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
  OEEComponent,
  AvailabilityComponent,
  PerformanceComponent,
  QualityComponent
  
];
