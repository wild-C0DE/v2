import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './interventions.component';
import { InterventionComponent } from './intervention/intervention.component';
import { TableRatiosComponent  } from './table ratio1/tableRatio1.component'



const routes: Routes = [{
  path: '', 
  component: TablesComponent,
  children: [
    {
      path: 'actions',
      component: InterventionComponent,
    },
    {
      path: 'ratio1',
      component: TableRatiosComponent 
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
  InterventionComponent,
  TableRatiosComponent,
  
];
