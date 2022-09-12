import { EnhancedQuestion } from '../../App';

export function processResult(result: EnhancedQuestion[]) {
    const unansweredQuestions: EnhancedQuestion[] = [];
    const correctQuestions: EnhancedQuestion[] = [];
    const incorrectQuestions: EnhancedQuestion[] = [];
    let fastestCorrectQuestion;
    let fastestIncorrectQuestion;
    let slowestCorrectQuestion;
    let slowestIncorrectQuestion;

    for (let i = 0; i < result.length; i++) {
        const question = result[i];

        if (!question.answered) {
            unansweredQuestions.push(question);
            continue;
        }

        if (question.correct) {
            correctQuestions.push(question);
            if (
                !fastestCorrectQuestion ||
                question.time < fastestCorrectQuestion.time
            ) {
                fastestCorrectQuestion = question;
            }
            if (
                !slowestCorrectQuestion ||
                question.time > slowestCorrectQuestion.time
            ) {
                slowestCorrectQuestion = question;
            }
        } else {
            incorrectQuestions.push(question);
            if (
                !fastestIncorrectQuestion ||
                question.time < fastestIncorrectQuestion.time
            ) {
                fastestIncorrectQuestion = question;
            }
            if (
                !slowestIncorrectQuestion ||
                question.time > slowestIncorrectQuestion.time
            ) {
                slowestIncorrectQuestion = question;
            }
        }
    }

    return {
        unansweredCount: unansweredQuestions.length,
        correctCount: correctQuestions.length,
        incorrectCount: incorrectQuestions.length,
        fastestCorrectQuestion,
        fastestIncorrectQuestion,
        slowestCorrectQuestion,
        slowestIncorrectQuestion,
    };
}
