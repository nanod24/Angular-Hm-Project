import { Injectable } from '@angular/core';
import {User} from "../Shared/Model/user";



@Injectable({
  providedIn: 'root'
})
export class StudentService {
private student: User[] = [];
  constructor() { }
  getStudents(){
    return [ //Copied from app.component.ts
      {id: 1, firstName: "Matt", lastName: "Haug", department: "Programming", isAdmin: false},
      {id: 2, firstName: "Darren", lastName: "Takakki", department: "Web Dev", isAdmin: true},
      {id: 3, firstName: "John", lastName: "Doe", department: "Programming", isAdmin: false},
      {id: 4, firstName: "Jane", lastName: "Doe", department: "Programming", isAdmin:true}
    ];
  }

}
