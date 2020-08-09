import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './totalSynthesis.component';
import { Ratio1Component } from './ratio1/ratio1.component';
import { Ratio2Component } from './ratio2/ratio2.component';
import { Ratio3Component } from './ratio3/ratio3.component';
import { Ratio4Component } from './ratio4/ratio4.component';

const routes: Routes = [{
  path: '', 
  component: TablesComponent,
  children: [
    {
      path: 'ratio1',
      component: Ratio1Component ,
    },
    {
      path: 'ratio2',
      component: Ratio2Component,
    },
    {
      path: 'ratio3',
      component: Ratio3Component,
    },
    {
      path: 'ratio4',
      component: Ratio4Component,
    },
    {
      path: 'Charts',
     
    }
    ,
    {
      path: 'charts',
      component: Ratio4Component,
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
  Ratio1Component,
  Ratio2Component,
  Ratio3Component,
  Ratio4Component,

  
];
