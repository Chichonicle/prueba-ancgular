import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserComponent } from './Pages/users/user.component';
import { LoginComponent } from './Pages/login/login.component';
import { SingleUserComponent } from './Pages/single-user/single-user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, UserComponent, LoginComponent, SingleUserComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba-tecnica';
}
