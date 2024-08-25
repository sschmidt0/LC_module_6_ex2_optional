import { ActorApi, ActorsGQLApi } from 'core/api-models';
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

export const mapActorsGQLApiToVm = (actors: ActorsGQLApi): ActorVm[] => {
  if (!Array.isArray(actors?.characters?.results)) return [];

  return actors?.characters?.results.map(mapActorGQLApiToVm);
};

export const mapActorGQLApiToVm = (
  actor: ActorsGQLApi['characters']['results'][0]
): ActorVm => {
  return {
    id: Number(actor?.id),
    name: actor?.name,
  };
};
