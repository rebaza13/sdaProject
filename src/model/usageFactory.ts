import { UserFactory } from "./FactoryMethod";

// Example usage
const teacherData = {
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Teacher',
    teachingSubjects: ['Math', 'Science'],
    yearsOfExperience: 5
};

const studentData = {
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Student',
    grade: '10th',
    parentContact: 'parent@example.com'
};

const teacher = UserFactory.createUser(teacherData);
const student = UserFactory.createUser(studentData);

console.log(teacher); // Output: Teacher { name: 'John Doe', email: 'john@example.com', role: 'Teacher', teachingSubjects: ['Math', 'Science'], yearsOfExperience: 5 }
console.log(student); // Output: Student { name: 'Jane Smith', email: 'jane@example.com', role: 'Student', grade: '10th', parentContact: 'parent@example.com' }
