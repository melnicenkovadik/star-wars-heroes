import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Character, Film, Starship } from '../../entities/character';

export const characterDetailsApi = createApi({
  reducerPath: 'characterDetailsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://sw-api.starnavi.io/' }),
  endpoints: (builder) => ({
    getCharacterDetails: builder.query<Character & { films: Film[], starships: Starship[] }, string>({
      query: (id) => `people/${id}`,
      transformResponse: (response: Character & { films: Film[], starships: Starship[] }) => {
        // Повертаємо дані без змін структури
        return {
          ...response,
          films: response.films.map(film => ({
            ...film
          })),
          starships: response.starships.map(starship => ({
            ...starship
          }))
        };
      }
    }),
  }),
});

export const { useGetCharacterDetailsQuery } = characterDetailsApi;
