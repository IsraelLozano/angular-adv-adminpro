import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

import { Routes } from '@angular/router'

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
