import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './oee-synthese.component';
import { AvailabilityComponent } from './availability/availability.component'
import { QualityComponent } from './quality/quality.component'
import { PerformanceComponent } from './performance/performance.component'


const routes: Routes = [{
  path: '', 
  component: TablesComponent,
  children: [
    
    {
      path: 'availability',
      component: AvailabilityComponent,
    },
    {
      path: 'quality',
      component: QualityComponent,
    },
    {
      path: 'performance',
      component: PerformanceComponent,
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
  AvailabilityComponent,
  QualityComponent,
  PerformanceComponent
  
  
];
