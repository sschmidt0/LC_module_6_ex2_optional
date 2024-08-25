import * as React from 'react';
import { ActorVm } from './actors.vm';
import { Button, Pagination, TextField } from '@mui/material';

export interface ActorsComponentProps {
  actors: ActorVm[];
  name: string;
  page: number;
  onPage: (page: number) => void;
  onChangeName: (name: string) => void;
  navigateToHome: () => void;
  onClick: (id: string) => void;
}

export const ActorsComponent = ({
  actors,
  name,
  page,
  onChangeName,
  onPage,
  navigateToHome,
  onClick,
}: ActorsComponentProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeName(e.target.value);
  };

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    onPage(value);
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
      <Pagination
        count={42}
        color="primary"
        page={page}
        onChange={handlePageChange}
      />
    </>
  );
};
