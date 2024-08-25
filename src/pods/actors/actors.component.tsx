import * as React from 'react';
import { ActorVm } from './actors.vm';
import { Button, TextField } from '@mui/material';

export interface ActorsComponentProps {
  actors: ActorVm[];
  name: string;
  onChangeName: (name: string) => void;
  navigateToHome: () => void;
  onClick: (id: string) => void;
}

export const ActorsComponent = ({
  actors,
  name,
  onChangeName,
  navigateToHome,
  onClick,
}: ActorsComponentProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeName(e.target.value);
  };

  return (
    <>
      <Button onClick={navigateToHome} style={{ display: 'block' }}>
        HOME
      </Button>

      <h3>Rick & Morty actors</h3>

      <TextField
        name="name"
        value={name}
        placeholder="Filter by name:"
        onChange={handleChange}
      />
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
