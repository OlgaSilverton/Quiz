import * as React from 'react';

const MAX_TIME = 15;
const EXTRA_TIME = 10;

export function useExtraTime() {
    const [maxTime, setMaxTime] = React.useState(MAX_TIME);
    const [extraTimeUsed, setExtraTimeUsed] = React.useState(false);

    const addTime = React.useCallback(() => {
        // add extra time
        setMaxTime(MAX_TIME + EXTRA_TIME);
        // mark extra time button as used
        setExtraTimeUsed(true);
    }, []);

    return {
        maxTime,
        extraTimeUsed,
        addTime,
        setMaxTime,
        defaultMaxTime: MAX_TIME,
    };
}
