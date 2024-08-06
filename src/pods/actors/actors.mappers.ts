import { ActorVm } from './actors.vm';
import { ActorApi } from './api/actors.api-model';

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
