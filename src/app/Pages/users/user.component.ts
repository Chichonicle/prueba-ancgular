import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent 

{
  http=inject(HttpClient);
  clients: any = [];

 
  fetchUsers(){
    this.http.get('https://reqres.in/api/users?page=2').subscribe((clients: any) => {
      this.clients = clients.data;
      
    });
  }

}
