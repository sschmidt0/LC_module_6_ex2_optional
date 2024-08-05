import * as React from 'react';
import { Button } from '@mui/material';
import { Link } from './home.business';
import { AppLayout } from 'layouts';

export interface HomeComponentProps {
  links: Link[];
  onClick: (id: string) => void;
}

export const HomeComponent = ({ links, onClick }: HomeComponentProps) => {
  return (
    <AppLayout>
      <div style={{ display: 'flex', gap: '24px' }}>
        {links.map((link) => (
          <Button
            variant="contained"
            color="primary"
            key={link.id}
            onClick={() => onClick(link.id)}
          >
            {link.text}
          </Button>
        ))}
      </div>
    </AppLayout>
  );
};
