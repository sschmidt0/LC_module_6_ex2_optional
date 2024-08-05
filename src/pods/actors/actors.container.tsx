import * as React from 'react';
import { ActorsComponent } from './actors.component';
import { useActors } from './actors.hook';

export const ActorsContainer = () => {
  const { actors, isError, isLoading } = useActors();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>An error has occured.</div>;

  return <ActorsComponent actors={actors} />;
};
