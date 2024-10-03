import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";

import {StudentListComponent} from "./app/student-list/student-list.component";
import {StudentDetailComponent} from "./app/student-detail/student-detail.component";
import {ModifyStudentComponent} from "./app/modify-student/modify-student.component";
import {PageNotFouundComponent} from "./app/page-not-fouund/page-not-fouund.component";

const routes: Routes = [
  {path: '', redirectTo: '/students', pathMatch: 'full'},
  { path: 'students', component: StudentListComponent },
  { path: 'students/:id', component: StudentDetailComponent },
  { path: 'modify-student', component: ModifyStudentComponent },
  { path: '**', component: PageNotFouundComponent },

]





bootstrapApplication(AppComponent,{

  providers: [provideRouter(routes)]
})
