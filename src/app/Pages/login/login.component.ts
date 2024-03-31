import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  http = inject(HttpClient);
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }

  login() {
    const data = {
      email: this.email,
      password: this.password,
    };
    const url = 'https://reqres.in/api/login';

    this.http.post(url, data).subscribe((response: any) => {
      console.log(response);
    });
    console.log(
      `Registrando con Email: ${this.email}, Password: ${this.password}`
    );
  }
}
