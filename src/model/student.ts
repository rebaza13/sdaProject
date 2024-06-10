import { User } from '@/model/Models';

export class Student implements User {
    name: string;
    email: string;
    role: string;
    grade: string;
    parentContact: string;

    constructor(userData: any) {
        this.name = userData.name;
        this.email = userData.email;
        this.role = 'Student';
        this.grade = userData.grade;
        this.parentContact = userData.parentContact;
    }
}