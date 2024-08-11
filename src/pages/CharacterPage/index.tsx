import React from 'react';
import { CharacterList } from '../../features/characterList/ui';

const CharacterPage: React.FC = () => {
  return (
    <div>
      <h1>Star Wars Characters</h1>
      <CharacterList />
    </div>
  );
};

export default CharacterPage;
