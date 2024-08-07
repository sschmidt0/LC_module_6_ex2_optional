import { ActorApi } from 'core/api-models';
import { ActorVm } from './actors.vm';

export const mapActorsApiToVm = (actors: ActorApi[]) => {
  if (!Array.isArray(actors)) return [];

  return actors.map(mapActorApiToVm);
};

export const mapActorApiToVm = (actor: ActorApi): ActorVm => {
  return {
    id: actor.id,
    name: actor.name,
  };
};
