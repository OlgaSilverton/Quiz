import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { MOCK_QUESTIONS } from './../../dataProviders/mockData';
import QuestionsScreen from './QuestionsScreen';

describe('lifeline buttons logic', () => {
    beforeEach(() => {
        render(<QuestionsScreen questions={MOCK_QUESTIONS} />);
    });

    afterEach(() => {
        cleanup();
    });

    it('disables hint button after use', () => {
        fireEvent.click(screen.getByTestId('hint-button'));

        expect(screen.getByTestId('hint-button')).toBeDisabled;
    });

    it('hint button disables 2 answers', () => {
        fireEvent.click(screen.getByTestId('hint-button'));

        expect(screen.getAllByRole('radio').length).toEqual(4);
        expect(
            screen.getAllByRole('radio').filter((element) => element.disabled)
                .length
        ).toEqual(2);
    });

    it('disables extra time button after use', () => {
        fireEvent.click(screen.getByTestId('extra-time-button'));

        expect(screen.getByTestId('extra-time-button')).toBeDisabled;
    });

    it('starts with 15 seconds', () => {
        expect(screen.getByTestId('timer-value').textContent).toBe('15');
    });

    it('extra time button adds 10 seconds', () => {
        fireEvent.click(screen.getByTestId('extra-time-button'));

        expect(screen.getByTestId('timer-value').textContent).toBe('25');
    });
});
