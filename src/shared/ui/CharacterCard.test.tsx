import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterCard from './CharacterCard';
import { BrowserRouter } from 'react-router-dom';

const character = {
    id: '1',
    name: 'Luke Skywalker',
    imageUrl: 'https://starwars-visualguide.com/assets/img/characters/1.jpg',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male'
};


describe('CharacterCard', () => {
    test('renders character information correctly', () => {
        render(
            <BrowserRouter>
                <CharacterCard character={character} />
            </BrowserRouter>
        );

        expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
        expect(screen.getByRole('img')).toHaveAttribute('src', character.imageUrl);
    });

    test('links to the character details page', () => {

        render(
            <BrowserRouter>
                <CharacterCard character={character} />
            </BrowserRouter>
        );

        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', '/character/1');
    });
});
