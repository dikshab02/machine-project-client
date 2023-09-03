import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './add-project/add-project.component';
import { LoginComponent } from './login/login.component';
import { AddMachineComponent } from './add-machine/add-machine.component';
import { AuthGuard } from './auth.guard';
import { LogoutGuard } from './logout.guard';
import { HomeComponent } from './home/home.component';
import { IsAdminGuard } from './isAdmin.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LogoutGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-project',
    component: AddProjectComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-machine',
    component: AddMachineComponent,
    canActivate: [AuthGuard,IsAdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
