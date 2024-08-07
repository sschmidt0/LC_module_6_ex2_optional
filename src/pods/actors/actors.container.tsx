import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { ActorsComponent } from './actors.component';
import { useActors } from './actors.hook';
import { linkRoutes } from 'core/router';

export const ActorsContainer = () => {
  const navigate = useNavigate();
  const { actors, isError, isLoading } = useActors();

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
    />
  );
};
