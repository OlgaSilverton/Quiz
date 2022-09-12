import * as React from 'react';

import { Question } from '../../dataProviders/getQuestions';
import { shuffleArray } from '../../utils/shuffleArray';

export function useHint(
    currentQuestion: Question,
    setCurrentQuestion: (question: Question) => void
) {
    const [hintUsed, setHintUsed] = React.useState(false);

    const hideTwoIncorrectAnswers = React.useCallback(() => {
        // mark 50/50 button as used
        setHintUsed(true);
        // pick 2 random incorrect answers and disable them
        const incorrectAnswers = shuffleArray(
            currentQuestion.answers.filter((item) => !item.correct)
        );
        const modifiedAnswers = currentQuestion.answers.map((item) => ({
            ...item,
            disabled:
                item.id === incorrectAnswers[0].id ||
                item.id === incorrectAnswers[1].id,
        }));
        setCurrentQuestion({
            ...currentQuestion,
            answers: modifiedAnswers,
        });
    }, [currentQuestion, setCurrentQuestion]);

    return {
        hintUsed,
        hideTwoIncorrectAnswers,
    };
}
