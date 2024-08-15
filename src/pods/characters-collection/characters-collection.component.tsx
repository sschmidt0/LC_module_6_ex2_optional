import * as React from 'react';
import { Button } from '@mui/material';
import { CharacterTable } from './components/table';
import { CharacterVm } from 'common/models';

export interface CharactersCollectionComponentProps {
  characters: CharacterVm[];
  navigateToHome: () => void;
  onEdit: (id: string) => void;
}

export const CharactersCollectionComponent = ({
  characters,
  navigateToHome,
  onEdit,
}: CharactersCollectionComponentProps) => {
  return (
    <>
      <Button onClick={navigateToHome} style={{ display: 'block' }}>
        HOME
      </Button>
      <CharacterTable characters={characters} onEdit={onEdit} />
    </>
  );
};
