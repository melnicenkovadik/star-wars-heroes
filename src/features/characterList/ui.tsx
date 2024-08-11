import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useGetCharactersQuery } from './model';
import CharacterCard from '../../shared/ui/CharacterCard';

export const CharacterList: React.FC = () => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState<any[]>([]); // Зберігаємо всі завантажені персонажі
  const { data, error, isLoading } = useGetCharactersQuery(page);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (data) {
      setCharacters(prevCharacters => [...prevCharacters, ...data]);
    }
  }, [data]);

  const lastCharacterElementRef = useCallback((node: HTMLDivElement | null) => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !isLoading) {
        setPage(prevPage => prevPage + 1);
      }
    });

    if (node) observer.current.observe(node);
  }, [isLoading]);

  if (error) return <div>Error occurred</div>;

  return (
      <div className="character-list">
        {characters.map((character, index) => {
          if (characters.length === index + 1) {
            return (
                <div ref={lastCharacterElementRef} key={character.name}>
                  <CharacterCard character={character} />
                </div>
            );
          } else {
            return <CharacterCard key={character.name} character={character} />;
          }
        })}
        {isLoading && <div>Loading...</div>}
      </div>
  );
};
