import * as React from 'react';
import { ActorVm } from './actors.vm';
import { Button } from '@mui/material';

export interface ActorsComponentProps {
  actors: ActorVm[];
  navigateToHome: () => void;
  onClick: (id: string) => void;
}

export const ActorsComponent = ({
  actors,
  navigateToHome,
  onClick,
}: ActorsComponentProps) => {
  return (
    <>
      <Button onClick={navigateToHome} style={{ display: 'block' }}>
        HOME
      </Button>
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
