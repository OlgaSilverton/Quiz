import * as React from 'react';

import { EnhancedQuestion } from '../../App';
import { Button, LinkButton } from '../../components/Button/Button';
import { Card } from '../../components/Card/Card';
import { RadioButton } from '../../components/RadioButton/RadioButton';
import { ScreenLayout } from '../../components/ScreenLayout/ScreenLayout';
import { Timer } from '../../components/Timer/Timer';

import { useExtraTime } from './useExtraTime';
import { useHint } from './useHint';
import {
	WithRandomQuestionsProps,
	withRandomQuestions,
} from './withRandomQuestions';
import { WithTimerProps, withTimer } from './withTimer';

import styles from './QuestionsScreen.module.css';

interface QuestionsScreenProps
	extends WithRandomQuestionsProps,
	WithTimerProps {
	writeResult: (question: EnhancedQuestion[]) => void;
}

function QuestionsScreen(props: QuestionsScreenProps) {
	const { questions, count, startTimer, stopTimer, writeResult } = props;

	const resultRef = React.useRef<EnhancedQuestion[]>([]);

	const [currentIndex, setCurrentIndex] = React.useState(0);
	const [currentQuestion, setCurrentQuestion] = React.useState(
		questions[currentIndex]
	);
	const [checkedAnswer, setCheckedAnswer] = React.useState('');

	const handleInputChange = React.useCallback(
		(changeEvent: React.ChangeEvent<HTMLInputElement>) => {
			setCheckedAnswer(changeEvent.target.value);
		},
		[]
	);

	const { maxTime, extraTimeUsed, addTime, setMaxTime, defaultMaxTime } =
		useExtraTime();

	const { hintUsed, hideTwoIncorrectAnswers } = useHint(
		currentQuestion,
		setCurrentQuestion
	);

	const timeIsOver = maxTime === count;

	const writeAnswer = React.useCallback(() => {
		const correctAnswer = currentQuestion.answers.find(
			(item) => item.correct
		);
		const noAnswer = timeIsOver || !checkedAnswer;

		resultRef.current.push({
			...currentQuestion,
			correct: noAnswer ? null : checkedAnswer === correctAnswer?.id,
			answered: noAnswer ? false : true,
			time: count,
		});
	}, [currentQuestion, count, timeIsOver, checkedAnswer]);

	const showNextQuestion = React.useCallback(() => {
		writeAnswer();
		setCurrentIndex(currentIndex + 1);
	}, [currentIndex, writeAnswer]);

	const showResults = React.useCallback(() => {
		writeAnswer();
		writeResult(resultRef.current);

		return () => {
			resultRef.current = [];
		};
	}, [writeAnswer, writeResult]);

	React.useEffect(() => {
		setCurrentQuestion(questions[currentIndex]);
		startTimer();

		return () => {
			stopTimer();
			setMaxTime(defaultMaxTime);
			setCheckedAnswer('');
		};
	}, [
		currentIndex,
		questions,
		defaultMaxTime,
		setMaxTime,
		startTimer,
		stopTimer,
	]);

	React.useEffect(() => {
		if (timeIsOver) {
			stopTimer();
			setMaxTime(0);
		}
	}, [timeIsOver, setMaxTime, stopTimer]);

	return (
		<ScreenLayout>
			<section className={styles.header}>
				<section className={styles.hintButtons}>
					<Button
						className={styles.hintButton}
						onClick={hideTwoIncorrectAnswers}
						disabled={hintUsed || timeIsOver}
						data-testid="hint-button"
					>
						50/50
					</Button>
					<Button
						className={styles.hintButton}
						onClick={addTime}
						disabled={extraTimeUsed || timeIsOver}
						data-testid="extra-time-button"
					>
						+10s
					</Button>
				</section>

				<Timer
					value={maxTime - count}
					text="Time left:"
					className={styles.timer}
				/>
			</section>

			<section className={styles.question}>
				<Card
					className={styles.card}
					text={currentQuestion.text}
					imageUrl={currentQuestion.imageUrl}
				/>
				<div>
					{currentQuestion.answers.map(
						({ id, text, disabled }, index) => (
							<RadioButton
								key={id}
								value={id}
								text={text}
								checked={checkedAnswer === id}
								onChange={handleInputChange}
								disabled={disabled || timeIsOver}
								className={styles.radio}
								data-testid={`answer-${index}`}
							/>
						)
					)}
				</div>
			</section>

			{currentIndex < questions.length - 1 ? (
				<Button
					className={styles.nextButton}
					onClick={showNextQuestion}
					data-testid="next-question-button"
				>
					Next question
				</Button>
			) : (
				<LinkButton
					className={styles.nextButton}
					to="/result"
					replace
					onClick={showResults}
					data-testid="view-results-button"
				>
					View results
				</LinkButton>
			)}
		</ScreenLayout>
	);
}

export default withRandomQuestions(withTimer(QuestionsScreen));
