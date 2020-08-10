import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './projects.component';
import { ProjectsComponent } from './project/projects.component';


const routes: Routes = [{
  path: '', 
  component: TablesComponent,
  children: [
    {
      path: 'project',
      component: ProjectsComponent,
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
  ProjectsComponent,
];
