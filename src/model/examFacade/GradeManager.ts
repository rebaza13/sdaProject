import { Grade } from '@/model/Models';

export class GradeManager {
    async addGrade(grade: Grade): Promise<void> {
        // Logic to add grade
    }

    async getGradesByStudent(studentId: string): Promise<Grade[]> {
        // Logic to get grades by student
        return [];
    }

    async getGradesByExam(examId: string): Promise<Grade[]> {
        // Logic to get grades by exam
        return [];
    }
}
