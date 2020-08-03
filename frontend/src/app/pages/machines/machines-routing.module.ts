import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './machines.component';
import { MachineComponent } from './machine/machine.component';
import { PreventionComponent } from './prevention/prevention.component';
import { CorrectionComponent } from './correction/correction.component';

const routes: Routes = [{
  path: '', 
  component: TablesComponent,
  children: [
    {
      path: 'machine',
      component: MachineComponent,
    },
    {
      path: 'prevention',
      component: PreventionComponent,
    },
    {
      path: 'correction',
      component: CorrectionComponent,
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
  MachineComponent,
  PreventionComponent,
  CorrectionComponent,
  
];
