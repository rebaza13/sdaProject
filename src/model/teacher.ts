import { User } from './Models';

export class Teacher implements User {
    name: string;
    email: string;
    role: string;
    teachingSubjects: string[];
    yearsOfExperience: number;

    constructor(userData: any) {
        this.name = userData.name;
        this.email = userData.email;
        this.role = 'Teacher';
        this.teachingSubjects = userData.teachingSubjects;
        this.yearsOfExperience = userData.yearsOfExperience;
    }
}