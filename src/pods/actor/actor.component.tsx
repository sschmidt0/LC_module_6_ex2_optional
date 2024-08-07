import { Button, Typography } from '@mui/material';
import * as React from 'react';
import { ActorVm } from './actor.vm';
import { InfoTable } from './components/table';

export interface ActorComponentProps {
  actor: ActorVm;
  onClick: () => void;
}

export const ActorComponent = ({ actor, onClick }: ActorComponentProps) => {
  return (
    <>
      <Button onClick={onClick}>BACK</Button>
      <div style={{ maxWidth: 450 }}>
        <div style={{ maxWidth: 360 }}>
          <img
            alt={actor.name}
            src={actor.image}
            style={{ width: '100%', height: 'auto', borderRadius: '50%' }}
          />
        </div>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {actor.species}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          style={{ marginBottom: '24px' }}
        >
          {actor.name}
        </Typography>
        <InfoTable
          gender={actor.gender}
          location={actor.location}
          origin={actor.origin}
          status={actor.status}
        />
      </div>
    </>
  );
};
