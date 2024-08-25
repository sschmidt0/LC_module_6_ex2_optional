import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { ActorsComponent } from './actors.component';
import { useActors, useDebounce } from './actors.hook';
import { linkRoutes } from 'core/router';
import { useQuery } from '@apollo/client';
import { GET_ACTORS_GQL } from './api/actors.api';

export const ActorsContainer = () => {
  const [name, setName] = React.useState('');
  const navigate = useNavigate();
  const debouncedQuery = useDebounce(name, 500);
  const { actors, isError, isLoading } = useActors(debouncedQuery);

  const handleClick = (id: string) => {
    navigate(linkRoutes.actor(id));
  };

  const navigateToHome = () => {
    navigate(linkRoutes.root);
  };

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>An error has occured.</div>;

  return (
    <ActorsComponent
      actors={actors}
      navigateToHome={navigateToHome}
      onClick={handleClick}
      name={name}
      onChangeName={setName}
    />
  );
};
