import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkDownloadComponent } from './work-download/wd.component';
import { TablesComponent } from './work-order.component';
import { WorkorderComponent } from './workorder/workorder.component';
import { EnqueueComponent } from './enqueue/enqueue.component';


const routes: Routes = [{
  path: '', 
  component: TablesComponent,
  children: [
    {
      path: 'workorder',
      component: WorkorderComponent ,
    },
    {
      path: 'enqueue',
      component: EnqueueComponent,
    },
    {
      path: 'work-download',
      component: WorkDownloadComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  WorkorderComponent,
  EnqueueComponent,
  WorkDownloadComponent
];
