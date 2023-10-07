import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainscreenComponent } from './components/mainscreen/mainscreen.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterUsersComponent } from './components/register-users/register-users.component';

// Criação das rotas.
const routes: Routes = [
  // Evia MainscreenComponent como rota padrão.
  { path: '', component: MainscreenComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registeruser', component: RegisterUsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }