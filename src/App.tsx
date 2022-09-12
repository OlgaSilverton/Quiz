import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Question, getQuestions } from './dataProviders/getQuestions';
import IntroScreen from './screens/IntroScreen/IntroScreen';
import NoMatchScreen from './screens/NoMatchScreen/NoMatchScreen';
import QuestionsScreen from './screens/QuestionsScreen/QuestionsScreen';
import ResultScreen from './screens/ResultScreen/ResultScreen';

export interface EnhancedQuestion extends Question {
    answered: boolean;
    correct: boolean | null;
    time: number;
}

function App() {
    const [questions, setQuestions] = React.useState<Question[]>([]);
    const [result, setResult] = React.useState<EnhancedQuestion[]>([]);
    const writeResult = React.useCallback((questions: EnhancedQuestion[]) => {
        setResult(questions);
    }, []);
    const clearResult = React.useCallback(() => {
        setResult([]);
    }, []);

    React.useEffect(() => {
        const questions = getQuestions();
        setQuestions(questions);
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<IntroScreen clearResult={clearResult} />}
                />
                <Route
                    path="/questions"
                    element={
                        <QuestionsScreen
                            questions={questions}
                            writeResult={writeResult}
                        />
                    }
                />
                <Route
                    path="/result"
                    element={<ResultScreen result={result} />}
                />
                <Route path="*" element={<NoMatchScreen />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
