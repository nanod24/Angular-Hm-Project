import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  getStudent(){
    return [ //Copied from app.component.ts
      {id: 1, firstName: "Matt", lastName: "Haug", department: "Programming", isAdmin: false},
      {id: 2, firstName: "Darren", lastName: "Takakki", department: "Web Dev", isAdmin: true},
      {id: 3, firstName: "John", lastName: "Doe", department: "Programming", isAdmin: false},
      {id: 4, firstName: "Jane", lastName: "Doe", department: "Programming", isAdmin:true}
    ];
  }

}
