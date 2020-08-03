import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './workers.component';
import { WorkerComponent } from './worker/worker.component';

const routes: Routes = [{
  path: '', 
  component: TablesComponent,
  children: [
    {
      path: 'worker',
      component: WorkerComponent,
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
  WorkerComponent,
  
];
