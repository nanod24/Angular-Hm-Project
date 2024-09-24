import { Component } from '@angular/core';
import { User} from "../Shared/Model/user";
import {NgForOf} from "@angular/common";
import {StudentDetailComponent} from "../student-detail/student-detail.component";
import {StudentService} from "../services/student.service";



@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [
    NgForOf,
    NgForOf,
    StudentDetailComponent,
  ],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent {
  //Placeholder values for the table
  displayedColumns:string[]= ['id', 'firstName', 'lastName', 'department', 'isAdmin'];
  userList: User[] = [];


  constructor (private studentService: StudentService ) {
    this.userList = this.studentService.getStudents()


  }



}
