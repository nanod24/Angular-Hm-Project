import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {User} from './Shared/Model/user';
import {JsonPipe, NgForOf} from "@angular/common";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'User Generation';
  userList: User[] = [
    {id: 1, firstName: "Diana", lastName: "Nano", department: "Programming", isAdmin: false},
    {id: 1, firstName: "Matt", lastName: "Haug", department: "WEB Dev", isAdmin: true},
    {id: 1, firstName: "John", lastName: "Doe", department: "Programming", isAdmin: false},
    {id: 1, firstName: "John", lastName: "Doe", department: "Programming", isAdmin: true},
  ]
//Function that gets called from our onclick. Takes in an
  //argument ofa variable called user, which is type User and returns void
  toggleAdminStatus(user: User): void {
    user.isAdmin = !user.isAdmin;
  }
}
