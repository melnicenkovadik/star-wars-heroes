import { render, screen } from '@testing-library/react';
import React from 'react';
import { App } from './App';

test('renders Star Wars Explorer header', () => {
    render(<App />);
    const header = screen.getByRole('heading', { name: /Star Wars Explorer/i });
    expect(header).toBeInTheDocument();
});

test('renders Star Wars Explorer footer', () => {
    render(<App />);
    const footer = screen.getByText(/Star Wars Explorer © 2024/i);
    expect(footer).toBeInTheDocument();
});
