import { PagesComponent } from './pages/pages.component'
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component'
import { GraficalComponent } from './pages/grafical/grafical.component'
import { ProgressComponent } from './pages/progress/progress.component'
import { RegisterComponent } from './auth/register/register.component'
import { LoginComponent } from './auth/login/login.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from './pages/dashboard/dashboard.component'

const routers: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'grafica1', component: GraficalComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ],
  },

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  { path: '**', component: NopagefoundComponent },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
