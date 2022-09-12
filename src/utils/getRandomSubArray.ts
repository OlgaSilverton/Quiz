import { shuffleArray } from './shuffleArray';

export function getRandomSubArray<T>(array: T[], count: number) {
    const shuffledArray = shuffleArray([...array]);

    return shuffledArray.slice(0, count);
}
