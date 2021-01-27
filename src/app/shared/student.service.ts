import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import { Student } from './student.model';
import { SubjectDetail } from './subjectdetails.model';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  selectedStudent: Student;
  subjectDetails: SubjectDetail;
  
  readonly baseURL = 'http://localhost:3000/students';

  constructor(private http: HttpClient) { }

  postStudent(student: Student){
    console.log("inside post");
    return this.http.post(this.baseURL, student);
  }

  getStudentList(){
    return  this.http.get(this.baseURL);
  }

  // putStudent(emp: Student){
  //   return this.http.put(this.baseURL + `/${emp._id}`, emp);
  // }  

  // deleteStudent(_id: string ){
  //   return this.http.delete(this.baseURL + `/${_id}`);
  // }  
} 