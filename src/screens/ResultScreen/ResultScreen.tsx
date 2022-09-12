import { EnhancedQuestion } from '../../App';
import { LinkButton } from '../../components/Button/Button';
import { ScreenLayout } from '../../components/ScreenLayout/ScreenLayout';

import { processResult } from './processResult';

import styles from './ResultScreen.module.css';

interface ResultScreenProps {
  result: EnhancedQuestion[];
}

function ResultScreen(props: ResultScreenProps) {
  const {
    unansweredCount,
    correctCount,
    incorrectCount,
    fastestCorrectQuestion,
    fastestIncorrectQuestion,
    slowestCorrectQuestion,
    slowestIncorrectQuestion,
  } = processResult(props.result);

  return (
    <ScreenLayout>
      <h1>You made it!</h1>
      <h3>Here are some statistics</h3>
      <section className={styles.numbers}>
        <div className={styles.numberCard}>
          <div className={styles.text}>Not Answered</div>
          <div className={styles.number}>{unansweredCount}</div>
        </div>
        <div className={styles.numberCard}>
          <div className={styles.text}>Correct</div>
          <div className={styles.number}>{correctCount}</div>
        </div>
        <div className={styles.numberCard}>
          <div className={styles.text}>Incorrect</div>
          <div className={styles.number}>{incorrectCount}</div>
        </div>
      </section>
      <section className={styles.times}>
        {fastestCorrectQuestion && (
          <div className={styles.timeBlock}>
            <p>
              Fastest correct answer:{' '}
              <span className={styles.time}>
                {fastestCorrectQuestion.time}s
              </span>
            </p>
            <p>{fastestCorrectQuestion.text}</p>
          </div>
        )}
        {slowestCorrectQuestion && (
          <div className={styles.timeBlock}>
            <p>
              Slowest correct answer:{' '}
              <span className={styles.time}>
                {slowestCorrectQuestion.time}s
              </span>
            </p>
            <p>{slowestCorrectQuestion.text}</p>
          </div>
        )}
        {fastestIncorrectQuestion && (
          <div className={styles.timeBlock}>
            <p>
              Fastest incorrect answer:{' '}
              <span className={styles.time}>
                {fastestIncorrectQuestion.time}s
              </span>
            </p>
            <p>{fastestIncorrectQuestion.text}</p>
          </div>
        )}
        {slowestIncorrectQuestion && (
          <div className={styles.timeBlock}>
            <p>
              Slowest incorrect answer:{' '}
              <span className={styles.time}>
                {slowestIncorrectQuestion.time}s
              </span>
            </p>
            <p>{slowestIncorrectQuestion.text}</p>
          </div>
        )}
      </section>
      <LinkButton to="/" className={styles.button}>
        Go to Main Page
      </LinkButton>
    </ScreenLayout>
  );
}

export default ResultScreen;
