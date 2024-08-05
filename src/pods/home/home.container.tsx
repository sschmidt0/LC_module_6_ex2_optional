import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { links } from './home.business';
import { HomeComponent } from './home.component';
import { switchRoutes } from 'core/router';

export const HomeContainer = () => {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(switchRoutes[id]);
  };

  return <HomeComponent links={links} onClick={handleClick} />;
};
