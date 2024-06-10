import { Answer } from './Answer';

export class AnswerManager {
    async addAnswer(answer: Answer): Promise<void> {
        // Logic to add answer
    }

    async getAnswersByStudent(studentId: string): Promise<Answer[]> {
        // Logic to get answers by student
        return [];
    }

    async getAnswersByQuestion(questionId: string): Promise<Answer[]> {
        // Logic to get answers by question
        return [];
    }
}
