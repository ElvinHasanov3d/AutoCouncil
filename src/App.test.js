// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AutoCouncil title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AutoCouncil/i);
    expect(titleElement).toBeInTheDocument();
});
