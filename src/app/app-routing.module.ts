import { AuthRoutingModule } from './auth/auth.routing'
import { PagesRoutingModule } from './pages/pages.routing'
import { NopagefoundComponent } from './nopagefound/nopagefound.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routers: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routers),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
