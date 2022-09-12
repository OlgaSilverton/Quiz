import * as React from 'react';

import { Question } from '../../dataProviders/getQuestions';
import { getRandomSubArray } from '../../utils/getRandomSubArray';

const DEFAULT_QUESTIONS_COUNT = 10;

export interface WithRandomQuestionsProps {
    questions: Question[];
}

export function withRandomQuestions<T extends WithRandomQuestionsProps>(
    Component: React.ComponentType<T>
) {
    function HOC(hocProps: T) {
        const { questions } = hocProps;

        // can add validation that there is one and only true answer, and filter incorrect questions
        if (!questions.length) {
            return <div>Loading...</div>;
        }

        const randomQuestions = getRandomSubArray(
            questions,
            DEFAULT_QUESTIONS_COUNT
        );

        return <Component {...hocProps} questions={randomQuestions} />;
    }

    HOC.displayName = `withQuestions(${
        Component.displayName || Component.name
    })`;

    return HOC;
}
