import * as React from 'react';
import { CharactersCollectionContainer } from 'pods/characters-collection';
import { AppLayout } from 'layouts';

export const CharactersCollectionScene = () => {
  return (
    <AppLayout>
      <CharactersCollectionContainer />
    </AppLayout>
  );
};
