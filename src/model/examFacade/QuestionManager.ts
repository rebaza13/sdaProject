import { Question } from '@/model/Models';
export class QuestionManager {
    async addQuestion(question: Question): Promise<void> {
        // Logic to add question
    }

    async getQuestionsByExam(examId: string): Promise<Question[]> {
        // Logic to get questions by exam
        return [];
    }
}
