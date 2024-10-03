import {Component, Input, OnInit} from '@angular/core';
import {User} from "../Shared/Model/user";
import {NgIf} from "@angular/common";
import {StudentService} from "../services/student.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.scss'
})
export class StudentDetailComponent {

  // declaring three variables to set up routing
  student: User | undefined
  userList: User[] = []
  currentIndex: number = 0;

  // set up the constructor
  constructor(private route:ActivatedRoute,
              private studentService: StudentService,
              private router: Router) { }


  // we have to writ the hook to get the list of students and current student
  ngOnInit() {
    this.studentService.getStudents().subscribe(users =>{
    this.userList = users;
    this.route.paramMap.subscribe(params =>{
      const id = Number(params.get('id'));
      if(id) {
        this.currentIndex = this.userList.findIndex(user=>user.id === id);
        this.student = this.userList[this.currentIndex];
      }
    });
    });
  }


}
