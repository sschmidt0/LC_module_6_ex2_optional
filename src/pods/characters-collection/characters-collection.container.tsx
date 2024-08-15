import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { CharactersCollectionComponent } from './characters-collection.component';
import { useCharacters } from './characters-collection.hook';

export const CharactersCollectionContainer = () => {
  const navigate = useNavigate();
  const { characters, isError, isLoading } = useCharacters();

  const navigateToHome = () => {
    navigate(linkRoutes.root);
  };

  const handleEdit = (id: string) => {
    navigate(linkRoutes.editCharacter(id));
  };

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>An error has occured.</div>;

  return (
    <CharactersCollectionComponent
      navigateToHome={navigateToHome}
      characters={characters}
      onEdit={handleEdit}
    />
  );
};
