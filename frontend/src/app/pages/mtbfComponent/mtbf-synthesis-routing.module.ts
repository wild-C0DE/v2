import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './mtbf-synthesis.component';
import { MTBFComponent } from './mtbf/mtbf.component';

const routes: Routes = [{
  path: '', 
  component: TablesComponent,
  children: [
    {
      path: 'mtbf-synthesis',
      component: MTBFComponent,
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
  MTBFComponent,
  
];
