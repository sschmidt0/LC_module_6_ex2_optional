import * as React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ActorComponent } from './actor.component';
import { useActor } from './actor.hook';

export const ActorContainer = () => {
  const { id } = useParams<{ id: string }>();
  const { actor, isError, isLoading } = useActor(id);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>An error has occured.</div>;

  return <ActorComponent onClick={handleClick} actor={actor} />;
};
