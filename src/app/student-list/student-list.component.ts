import { Component } from '@angular/core';
import {User} from "../Shared/Model/user";
import {NgForOf} from "@angular/common";


@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [NgForOf ],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent {
  //Placeholder values for the table
  displayedColumns:string[]=['id', 'firstName', 'lastName', 'department', 'isAdmin'];

  userList: User[] = [
    {id: 1, firstName: "Diana", lastName: "Nano", department: "Programming", isAdmin: false},
    {id: 1, firstName: "Matt", lastName: "Haug", department: "WEB Dev", isAdmin: true},
    {id: 1, firstName: "John", lastName: "Doe", department: "Programming", isAdmin: false},
    {id: 1, firstName: "John", lastName: "Doe", department: "Programming", isAdmin: true},
  ]
}
