import * as React from 'react';
import { ActorVm } from './actors.vm';

export interface ActorsComponentProps {
  actors: ActorVm[];
}

export const ActorsComponent = ({ actors }: ActorsComponentProps) => {
  return (
    <>
      <h3>Rick & Morty actors</h3>
      <ul>
        {actors.map((actor) => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </>
  );
};
