import { processResult } from './processResult';

const MOCK_RESULT = [
    {
        id: '4',
        text: 'Question 4',
        imageUrl: '',
        answers: [
            {
                id: 'answer1',
                text: 'Answer 1',
                correct: false,
            },
            {
                id: 'answer2',
                text: 'Answer 2',
                correct: false,
            },
            {
                id: 'answer3',
                text: 'Answer 3',
                correct: true,
            },
            {
                id: 'answer4',
                text: 'Answer 4',
                correct: false,
            },
        ],
        correct: true,
        answered: true,
        time: 2,
    },
    {
        id: '14',
        text: 'Question 14',
        imageUrl: '',
        answers: [
            {
                id: 'answer1',
                text: 'Answer 1',
                correct: false,
            },
            {
                id: 'answer2',
                text: 'Answer 2',
                correct: false,
            },
            {
                id: 'answer3',
                text: 'Answer 3',
                correct: true,
            },
            {
                id: 'answer4',
                text: 'Answer 4',
                correct: false,
            },
        ],
        correct: false,
        answered: true,
        time: 1,
    },
    {
        id: '6',
        text: 'Question 6',
        imageUrl: '',
        answers: [
            {
                id: 'answer1',
                text: 'Answer 1',
                correct: false,
            },
            {
                id: 'answer2',
                text: 'Answer 2',
                correct: false,
            },
            {
                id: 'answer3',
                text: 'Answer 3',
                correct: true,
            },
            {
                id: 'answer4',
                text: 'Answer 4',
                correct: false,
            },
        ],
        correct: false,
        answered: true,
        time: 1,
    },
    {
        id: '3',
        text: 'Question 3',
        imageUrl: '',
        answers: [
            {
                id: 'answer1',
                text: 'Answer 1',
                correct: false,
            },
            {
                id: 'answer2',
                text: 'Answer 2',
                correct: false,
            },
            {
                id: 'answer3',
                text: 'Answer 3',
                correct: true,
            },
            {
                id: 'answer4',
                text: 'Answer 4',
                correct: false,
            },
        ],
        correct: false,
        answered: true,
        time: 2,
    },
    {
        id: '9',
        text: 'Question 9',
        imageUrl: '',
        answers: [
            {
                id: 'answer1',
                text: 'Answer 1',
                correct: false,
            },
            {
                id: 'answer2',
                text: 'Answer 2',
                correct: false,
            },
            {
                id: 'answer3',
                text: 'Answer 3',
                correct: true,
            },
            {
                id: 'answer4',
                text: 'Answer 4',
                correct: false,
            },
        ],
        correct: true,
        answered: true,
        time: 1,
    },
    {
        id: '10',
        text: 'Question 10',
        imageUrl: '',
        answers: [
            {
                id: 'answer1',
                text: 'Answer 1',
                correct: false,
            },
            {
                id: 'answer2',
                text: 'Answer 2',
                correct: false,
            },
            {
                id: 'answer3',
                text: 'Answer 3',
                correct: true,
            },
            {
                id: 'answer4',
                text: 'Answer 4',
                correct: false,
            },
        ],
        correct: false,
        answered: true,
        time: 1,
    },
    {
        id: '5',
        text: 'Question 5',
        imageUrl: '',
        answers: [
            {
                id: 'answer1',
                text: 'Answer 1',
                correct: false,
            },
            {
                id: 'answer2',
                text: 'Answer 2',
                correct: false,
            },
            {
                id: 'answer3',
                text: 'Answer 3',
                correct: true,
            },
            {
                id: 'answer4',
                text: 'Answer 4',
                correct: false,
            },
        ],
        correct: true,
        answered: true,
        time: 1,
    },
    {
        id: '7',
        text: 'Question 7',
        imageUrl: '',
        answers: [
            {
                id: 'answer1',
                text: 'Answer 1',
                correct: false,
            },
            {
                id: 'answer2',
                text: 'Answer 2',
                correct: false,
            },
            {
                id: 'answer3',
                text: 'Answer 3',
                correct: true,
            },
            {
                id: 'answer4',
                text: 'Answer 4',
                correct: false,
            },
        ],
        correct: false,
        answered: true,
        time: 1,
    },
    {
        id: '11',
        text: 'Question 11',
        imageUrl: '',
        answers: [
            {
                id: 'answer1',
                text: 'Answer 1',
                correct: false,
            },
            {
                id: 'answer2',
                text: 'Answer 2',
                correct: false,
            },
            {
                id: 'answer3',
                text: 'Answer 3',
                correct: true,
            },
            {
                id: 'answer4',
                text: 'Answer 4',
                correct: false,
            },
        ],
        correct: null,
        answered: false,
        time: 1,
    },
    {
        id: '15',
        text: 'Question 15',
        imageUrl: '',
        answers: [
            {
                id: 'answer1',
                text: 'Answer 1',
                correct: false,
            },
            {
                id: 'answer2',
                text: 'Answer 2',
                correct: false,
            },
            {
                id: 'answer3',
                text: 'Answer 3',
                correct: true,
            },
            {
                id: 'answer4',
                text: 'Answer 4',
                correct: false,
            },
        ],
        correct: false,
        answered: true,
        time: 8,
    },
];

describe('processResult', () => {
    it('should have 1 unanswered', () => {
        const { unansweredCount } = processResult(MOCK_RESULT);
        expect(unansweredCount).toEqual(1);
    });

    it('should have 3 correct', () => {
        const { correctCount } = processResult(MOCK_RESULT);
        expect(correctCount).toEqual(3);
    });

    it('should have 6 incorrect', () => {
        const { incorrectCount } = processResult(MOCK_RESULT);
        expect(incorrectCount).toEqual(6);
    });

    it('should find first fastest correct answer', () => {
        const { fastestCorrectQuestion } = processResult(MOCK_RESULT);
        expect(fastestCorrectQuestion.time).toEqual(1);
        expect(fastestCorrectQuestion.id).toEqual('9');
    });

    it('should find first fastest incorrect answer', () => {
        const { fastestIncorrectQuestion } = processResult(MOCK_RESULT);
        expect(fastestIncorrectQuestion.time).toEqual(1);
        expect(fastestIncorrectQuestion.id).toEqual('14');
    });

    it('should find first slowest correct answer', () => {
        const { slowestCorrectQuestion } = processResult(MOCK_RESULT);
        expect(slowestCorrectQuestion.time).toEqual(2);
        expect(slowestCorrectQuestion.id).toEqual('4');
    });

    it('should find first slowest incorrect answer', () => {
        const { slowestIncorrectQuestion } = processResult(MOCK_RESULT);
        expect(slowestIncorrectQuestion.time).toEqual(8);
        expect(slowestIncorrectQuestion.id).toEqual('15');
    });
});
