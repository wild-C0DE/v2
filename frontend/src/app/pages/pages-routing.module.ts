import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'home',
      component: DashboardComponent,
    },
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'profile',
      component: ProfileComponent
    },
    // {
    //   path: 'chat',
    //   component: ChatRoomComponent,
    // },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts AFNOR/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'stock',
      loadChildren: () => import('./stock/stock.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'machines',
      loadChildren: () => import('./machines/machines.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'work-order',
      loadChildren: () => import('./work-order/work-order.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'equipements',
      loadChildren: () => import('./equipements/equipements.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'workers',
      loadChildren: () => import('./workers/workers.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'synthesis',
      loadChildren: () => import('./synthesis/synthesis.module')
        .then(m => m.TablesModule),
    },
    {

      path: 'oee',
      loadChildren: () => import('./oeeComponent/oee-synthese.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'mttr',
      loadChildren: () => import('./mttrComponent/mttr-synthesis.module')
      .then(m => m.TablesModule),
    },
    {
      path: 'mtbf',
      loadChildren: () => import('./mtbfComponent/mtbf-synthesis.module')
      .then(m => m.TablesModule),
    },
    {
      path: 'projects',
      loadChildren: () => import('./projects/projects.module')
      .then(m => m.TablesModule),
    },
    {
      path: 'interventions',
      loadChildren: () => import('./Interventions History/interventions.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'totalSynthesis',
      loadChildren: () => import('./totalSynthesis/totalSynthesis.module')

        .then(m => m.TablesModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./chartsHistory/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
  
    {
      path: '**',
      component: NotFoundComponent,
    },
    
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
