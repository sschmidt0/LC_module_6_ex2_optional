import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  hotelCollection: string;
  createHotel: string;
  editHotel: string;
  actors: string;
  actor: string;
  characters: string;
  editCharacter: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  hotelCollection: '/hotels',
  createHotel: '/hotels/create',
  editHotel: '/hotels/:id',
  actors: '/actors',
  actor: '/actors/:id',
  characters: '/characters',
  editCharacter: '/characters/:id',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes
  extends Omit<SwitchRoutes, 'editHotel' | 'actor' | 'editCharacter'> {
  editHotel: NavigationFunction;
  actor: NavigationFunction;
  editCharacter: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editHotel: (id) => generatePath(switchRoutes.editHotel, { id }),
  actor: (id) => generatePath(switchRoutes.actor, { id }),
  editCharacter: (id) => generatePath(switchRoutes.editCharacter, { id }),
};
