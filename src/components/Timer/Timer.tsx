import * as React from 'react';

import styles from './Timer.module.css';

interface TimerProps {
    value: number;
    text?: string;
    className?: string;
}

export function Timer(props: TimerProps) {
    return (
        <section className={props.className}>
            {props.text && (
                <span className={styles.text} data-testid="timer-text">
                    {props.text}
                </span>
            )}
            <div className={styles.time} data-testid="timer-value">
                {props.value}
            </div>
        </section>
    );
}
