import { Routes } from '@angular/router';
import { UserComponent } from './Pages/users/user.component';
import { LoginComponent } from './Pages/login/login.component';
import { SingleUserComponent } from './Pages/single-user/single-user.component';

export const routes: Routes = [
    {
        path: 'prueba',
        children: [
          { path: 'users', component: UserComponent },
          { path: 'login', component: LoginComponent },
          { path: 'single-user', component: SingleUserComponent },
        ],
      },
    ];