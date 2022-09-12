import { render, screen } from '@testing-library/react';

import App from './App';

test('renders Start link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Start/i);
    expect(linkElement).toBeInTheDocument();
});
