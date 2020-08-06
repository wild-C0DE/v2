import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './interventions.component';
import { InterventionComponent } from './intervention/intervention.component';

const routes: Routes = [{
  path: '', 
  component: TablesComponent,
  children: [
    {
      path: 'intervention',
      component: InterventionComponent,
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
  
];
