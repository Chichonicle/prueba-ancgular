import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-single-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './single-user.component.html',
  styleUrl: './single-user.component.css'
})
export class SingleUserComponent {
    http = inject(HttpClient);
    id:any;
    client: any = [];
  
    constructor() {
      this.id = "";
    }

    userDetail() {

      const url = `https://reqres.in/api/users/${this.id}`;

      this.http.get(url).subscribe((response: any) => {
        this.client = response.data;
        console.log(this.client);
      });
    }

}