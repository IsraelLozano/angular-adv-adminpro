import { GraficalComponent } from './grafical/grafical.component'
import { ProgressComponent } from './progress/progress.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { PagesComponent } from './pages.component'
import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'grafica1', component: GraficalComponent },
      // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
