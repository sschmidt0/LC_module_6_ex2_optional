import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { ActorsComponent } from './actors.component';
import { useActors, useDebounce } from './actors.hook';
import { linkRoutes } from 'core/router';

export const ActorsContainer = () => {
  const [name, setName] = React.useState('');
  const [page, setPage] = React.useState(1);
  const navigate = useNavigate();
  const debouncedQuery = useDebounce(name, 500);
  const { actors, isError, isLoading } = useActors(debouncedQuery, page);

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
      page={page}
      onPage={setPage}
      onClick={handleClick}
      name={name}
      onChangeName={setName}
    />
  );
};
