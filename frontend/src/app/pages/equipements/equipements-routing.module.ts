import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './equipements.component';
import { AssignComponent } from './assign/assign.component';
import { EquipementComponent } from './equipement/equipement.component';


const routes: Routes = [{
  path: '', 
  component: TablesComponent,
  children: [
    {
      path: 'assign',
      component: AssignComponent,
    },
    {
      path: 'equipement',
      component: EquipementComponent,
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
  AssignComponent,
  EquipementComponent,
];
