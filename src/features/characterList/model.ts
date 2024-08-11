import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Character } from '../../entities/character';

export const charactersApi = createApi({
    reducerPath: 'charactersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://sw-api.starnavi.io/' }),
    endpoints: (builder) => ({
        getCharacters: builder.query<Character[], number>({
        query: (page = 1) => `people?page=${page}`,
        transformResponse: (response: { results: Character[] }) => response.results.map((character) => {
                return {
                ...character,
            // @ts-ignore
                id: character.url.split('/').slice(-2)[0],
            };
        }
        ),
    }),
    })
});

export const { useGetCharactersQuery } = charactersApi;
