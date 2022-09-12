import { MOCK_QUESTIONS } from './mockData';

interface Answer {
    id: string;
    text: string;
    correct: boolean;
    disabled?: boolean;
}

export interface Question {
    id: string;
    text: string;
    answers: Answer[];
    imageUrl?: string;
}

export function getQuestions(): Question[] {
    // fetch here
    return MOCK_QUESTIONS;
}
