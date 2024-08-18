import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { ActorsComponent } from './actors.component';
import { useActors } from './actors.hook';
import { linkRoutes } from 'core/router';
import { useQuery } from '@apollo/client';
import { GET_ACTORS_GQL } from './api/actors.api';

export const ActorsContainer = () => {
  const navigate = useNavigate();
  // from first exercise
  const { actors, isError, isLoading } = useActors();

  const { data, loading, error } = useQuery(GET_ACTORS_GQL);

  const handleClick = (id: string) => {
    navigate(linkRoutes.actor(id));
  };

  const navigateToHome = () => {
    navigate(linkRoutes.root);
  };

  if (loading) return <div>Loading...</div>;

  if (error) return <div>An error has occured.</div>;

  return (
    <ActorsComponent
      actors={actors}
      navigateToHome={navigateToHome}
      onClick={handleClick}
    />
  );
};
