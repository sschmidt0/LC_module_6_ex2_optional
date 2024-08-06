import * as React from 'react';
import { ActorVm } from './actors.vm';

export interface ActorsComponentProps {
  actors: ActorVm[];
  onClick: (id: string) => void;
}

export const ActorsComponent = ({ actors, onClick }: ActorsComponentProps) => {
  return (
    <>
      <h3>Rick & Morty actors</h3>
      <ul>
        {actors.map((actor) => (
          <li key={actor.id}>
            <span
              onClick={() => onClick(actor.id.toString())}
              style={{ cursor: 'pointer' }}
            >
              {actor.name}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};
