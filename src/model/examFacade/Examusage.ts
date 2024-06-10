// Example usage
import { ExamFacade } from './ExamFacade';
import { Grade,Question,Answer } from '@/model/Models';
const facade = new ExamFacade();

const grade: Grade = {
    id: '1',
    studentId: 'student1',
    examId: 'exam1',
    score: 95,
    date: new Date()
};

const question: Question = {
    id: '1',
    examId: 'exam1',
    text: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '4'
};

const answer: Answer = {
    id: '1',
    studentId: 'student1',
    questionId: '1',
    selectedOption: '4'
};

(async () => {
    await facade.addGrade(grade);
    await facade.addQuestion(question);
    await facade.addAnswer(answer);

    const studentGrades = await facade.getGradesByStudent('student1');
    const examQuestions = await facade.getQuestionsByExam('exam1');
    const questionAnswers = await facade.getAnswersByQuestion('1');

    console.log('Student Grades:', studentGrades);
    console.log('Exam Questions:', examQuestions);
    console.log('Question Answers:', questionAnswers);
})();
