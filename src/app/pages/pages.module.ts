import { AppRoutingModule } from './../app-routing.module'
import { PagesComponent } from './pages.component'
import { GraficalComponent } from './grafical/grafical.component'
import { ProgressComponent } from './progress/progress.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from '../shared/shared.module'
import { FormsModule } from '@angular/forms'
import { ComponentsModule } from '../components/components.module'

import { NgChartsModule } from 'ng2-charts'
import { AccountSettingsComponent } from './account-settings/account-settings.component'

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    GraficalComponent,
    PagesComponent,
    AccountSettingsComponent,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    GraficalComponent,
    PagesComponent,
    AccountSettingsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ComponentsModule,
    NgChartsModule,
  ],
})
export class PagesModule {}
