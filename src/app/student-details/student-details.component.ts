import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student.service';
import { NgForm } from '@angular/forms';
import { Student } from '../shared/student.model';
import { SubjectDetail } from '../shared/subjectdetails.model';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
  providers: [StudentService]
})
export class StudentDetailsComponent implements OnInit {

  students: Student;

  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
    this.students = new Student();
    this.students.subjectDetails = [];
    console.log(this.students.subjectDetails);
    this.resetForm();
  }

  addSubject() {
    this.students.subjectDetails.push({
      id:  this.students.subjectDetails.length + 1,
      subject: '',
      marks: ''
    });
  }

  removeSubject(i: number) {
    this.students.subjectDetails.splice(i, 1);
  }

  resetForm(form?: NgForm){
    if(form)
      form.reset();
      this.studentService.selectedStudent = {
      _id: "",
      first_name: "",
      last_name: "",
      roll_number: null, 
      email: "",
      subjectDetails: null
    }
  }

  onSubmit(form: NgForm){
    if(form.value._id == ""){    
      this.studentService.postStudent(form.value).subscribe((res) => {
        this.resetForm(form);
      }); 
    } 
  } 
}