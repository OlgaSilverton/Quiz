import { cleanup, render, screen } from '@testing-library/react';

import { Timer } from './Timer';

describe('timer component', () => {
    afterEach(() => {
        cleanup();
    });

    it('should render timer with text', () => {
        render(<Timer text="Time left:" value={10} />);

        expect(screen.getByTestId('timer-text').textContent).toEqual(
            'Time left:'
        );

        expect(screen.getByTestId('timer-value').textContent).toEqual('10');
    });

    it('should not render empty element with no text', () => {
        render(<Timer value={10} />);

        expect(screen.queryByTestId('timer-text')).toBeUndefined;

        expect(screen.getByTestId('timer-value').textContent).toEqual('10');
    });
});
