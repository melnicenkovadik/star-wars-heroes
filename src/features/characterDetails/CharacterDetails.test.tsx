import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { useGetCharacterDetailsQuery } from './model';
import { CharacterDetails } from './ui';

// Mocking the API request
jest.mock('./model', () => ({
    useGetCharacterDetailsQuery: jest.fn(),
}));

const mockData = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    films: [{ title: 'A New Hope' }],
    starships: [{ name: 'X-wing' }],
};

describe('CharacterDetails', () => {
    beforeEach(() => {
        (useGetCharacterDetailsQuery as jest.Mock).mockImplementation(() => ({
            data: mockData,
            error: null,
            isLoading: false,
        }));
    });

    test('renders character details and graph', async () => {
        render(<CharacterDetails id="1" />);

        // Target the heading specifically
        expect(screen.getByRole('heading', { name: /Luke Skywalker/i })).toBeInTheDocument();

        // Alternatively, target "Luke Skywalker" inside a specific container if needed
        const characterNode = screen.getByTestId('rf__node-hero');
        expect(within(characterNode).getByText(/Luke Skywalker/i)).toBeInTheDocument();

        // Checking other details
        expect(screen.getByText(/Height: 172/i)).toBeInTheDocument();
        expect(screen.getByText(/Mass: 77/i)).toBeInTheDocument();
        expect(screen.getByText(/Film 1: A New Hope/i)).toBeInTheDocument();
        expect(screen.getByText(/Starship 1: X-wing/i)).toBeInTheDocument();
    });

    test('handles loading state', () => {
        (useGetCharacterDetailsQuery as jest.Mock).mockImplementation(() => ({
            data: null,
            error: null,
            isLoading: true,
        }));

        render(<CharacterDetails id="1" />);

        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    });

    test('handles error state', () => {
        (useGetCharacterDetailsQuery as jest.Mock).mockImplementation(() => ({
            data: null,
            error: { message: 'Failed to fetch' },
            isLoading: false,
        }));

        const { container } = render(<CharacterDetails id={''} />);

        // eslint-disable-next-line
        const errorDivs = container.querySelectorAll('div');

        let errorMessage = '';
        errorDivs.forEach((div) => {
            // @ts-ignore
            errorMessage += div.textContent.trim();
        });

        expect(errorMessage).toContain('Error:');
        expect(errorMessage).toContain('Failed to fetch');
    });

});
