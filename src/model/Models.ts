// User.ts
export interface User {
    role: string;
    name: string;
    email: string;
    photo?: string;
    uid?: string;
}
export enum UserRole {
    Teacher = 'teacher',
    Student = 'user',
}

// Teacher.ts

export interface Teacher extends User {
    teachingSubjects: string[];
    yearsOfExperience: number;
}

// Student.ts

export interface Student extends User {
    grade: string;
    parentContact: string;
}

// Exam.ts
export interface Exam {
    id: string;
    title: string;
    subject: string;
    duration: number; // Duration in minutes
}

// Question.ts
export interface Question {
    id: string;
    text: string;
    options: string[];
    correctAnswer: string;
}
export interface Answer {
    id: string;
    studentId: string;
    questionId: string;
    selectedOption: string;
}
export interface Question {
    id: string;
    examId: string;
    text: string;
    options: string[];
    correctAnswer: string;
}
export interface Grade {
    id: string;
    studentId: string;
    examId: string;
    score: number;
    date: Date;
}
