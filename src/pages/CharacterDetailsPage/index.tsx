import React from 'react';
import { CharacterDetails } from '../../features/characterDetails/ui';
import { useParams } from "react-router";
import ErrorBoundary from '../../shared/ui/ErrorBoundary';

const CharacterDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div>
        <ErrorBoundary>
            <CharacterDetails id={id || ''} />
        </ErrorBoundary>

    </div>
  );
};

export default CharacterDetailsPage;
