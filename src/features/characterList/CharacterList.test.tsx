import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useGetCharactersQuery } from './model';
import { CharacterList } from './ui';

// Mocking the API hook
jest.mock('./model', () => ({
    useGetCharactersQuery: jest.fn(),
}));

const mockCharacters = [
    { name: 'Luke Skywalker', id: '1' },
    { name: 'Darth Vader', id: '2' },
];

describe('CharacterList', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders initial characters and handles loading state', async () => {
        (useGetCharactersQuery as jest.Mock).mockReturnValue({
            data: mockCharacters,
            error: null,
            isLoading: false,
        });

        render(
            <MemoryRouter>
                <CharacterList />
            </MemoryRouter>
        );

        // Check if characters are rendered
        expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();
        expect(screen.getByText(/Darth Vader/i)).toBeInTheDocument();

        // Check if the loading indicator is not present
        expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
    });

    test('handles loading state initially', () => {
        (useGetCharactersQuery as jest.Mock).mockReturnValue({
            data: [],
            error: null,
            isLoading: true,
        });

        render(
            <MemoryRouter>
                <CharacterList />
            </MemoryRouter>
        );

        // Check if loading indicator is displayed
        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    });

    test('handles error state', () => {
        (useGetCharactersQuery as jest.Mock).mockReturnValue({
            data: null,
            error: new Error('Failed to fetch'),
            isLoading: false,
        });

        render(
            <MemoryRouter>
                <CharacterList />
            </MemoryRouter>
        );

        // Check if error message is displayed
        expect(screen.getByText(/Error occurred/i)).toBeInTheDocument();
    });
});
