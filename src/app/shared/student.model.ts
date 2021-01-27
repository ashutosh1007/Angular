import { SubjectDetail } from "./subjectdetails.model";

export class Student{
    _id: string;
    first_name: string;
    last_name: string;
    roll_number: number;
    email: string;
    subjectDetails: SubjectDetail[];
    // any[] = [{
        // id: 1,
        // subject: '',
        // marks: '',
    // }];
}