import { Injectable } from '@angular/core';
import {User} from "../Shared/Model/user";
import {userList} from "../Shared/mockStudent.data"
import {Observable, of} from "rxjs";




@Injectable({
  providedIn: 'root'
})
export class StudentService {
private student: User[] = userList;
  constructor() { }
  getStudents(): Observable<User[]>{
    return of (userList};
  }

}
