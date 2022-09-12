import * as React from 'react';

import { LinkButton } from '../../components/Button/Button';
import { ScreenLayout } from '../../components/ScreenLayout/ScreenLayout';

import styles from './IntroScreen.module.css';

interface IntroScreenProps {
    clearResult: VoidFunction;
}

function IntroScreen(props: IntroScreenProps) {
    const { clearResult } = props;

    React.useEffect(() => {
        clearResult();
    }, [clearResult]);

    return (
        <ScreenLayout>
            <h1 className={styles.header}>Welcome to the Quiz!</h1>

            <section>
                <p>
                    When the game begins, you will be presented with ten
                    questions, one by one. Each question can have a text or an
                    image, and four alternative answers. Only one of the answers
                    is correct.
                </p>
                <p>
                    You will have 15 seconds to answer each question. When the
                    time is up, that question is considered unanswered.
                </p>
                <p>You will have two lifelines:</p>
                <ul>
                    <li>“50/50” removes two incorrect answers</li>
                    <li>
                        “+10s” gives you ten extra seconds for the current
                        question
                    </li>
                </ul>
                <p>Each lifeline can only be used once during a game.</p>
            </section>

            <LinkButton className={styles.button} to="/questions">
                Start
            </LinkButton>
        </ScreenLayout>
    );
}

export default IntroScreen;
