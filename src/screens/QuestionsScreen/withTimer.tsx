import * as React from 'react';

export interface WithTimerProps {
    count: number;
    startTimer: VoidFunction;
    stopTimer: VoidFunction;
}

export function withTimer<T extends WithTimerProps>(
    Component: React.ComponentType<T>
) {
    function HOC(passedProps: Omit<T, 'count' | 'startTimer' | 'stopTimer'>) {
        const [count, setCount] = React.useState(0);
        const timerRef = React.useRef<NodeJS.Timer | undefined>(undefined);

        const startTimer = React.useCallback(() => {
            timerRef.current = setInterval(
                () => setCount((prevCount) => prevCount + 1),
                1000
            );
        }, []);

        const stopTimer = React.useCallback(() => {
            clearInterval(timerRef.current);
            setCount(0);
        }, []);

        return (
            <Component
                {...(passedProps as T)}
                count={count}
                startTimer={startTimer}
                stopTimer={stopTimer}
            />
        );
    }

    HOC.displayName = `withTimer(${Component.displayName || Component.name})`;

    return HOC;
}
