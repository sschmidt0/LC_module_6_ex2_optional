import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  actors: string;
  actor: string;
  characters: string;
  editCharacter: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  actors: '/actors',
  actor: '/actors/:id',
  characters: '/characters',
  editCharacter: '/characters/:id',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'actor' | 'editCharacter'> {
  actor: NavigationFunction;
  editCharacter: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  actor: (id) => generatePath(switchRoutes.actor, { id }),
  editCharacter: (id) => generatePath(switchRoutes.editCharacter, { id }),
};
