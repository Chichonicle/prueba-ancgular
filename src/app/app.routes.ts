import { Routes } from '@angular/router';
import { UserComponent } from './Pages/users/user.component';
import { LoginComponent } from './Pages/login/login.component';
import { SingleUserComponent } from './Pages/single-user/single-user.component';

export const routes: Routes = [
  { path: 'prueba/users', component: UserComponent },
  { path: 'prueba/login', component: LoginComponent },
  { path: 'prueba/single-user', component: SingleUserComponent },
];