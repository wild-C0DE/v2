import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './mttr-synthesis.component';
import { MTTRComponent } from './mttr/mttr.component';

const routes: Routes = [{
  path: '', 
  component: TablesComponent,
  children: [
    {
      path: 'mttr-synthesis',
      component: MTTRComponent,
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
  MTTRComponent,
  
];
