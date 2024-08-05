import { ActorVm } from './actors.vm';
import { ActorApi } from './api/actors.api-model';

export const mapActorsApiToVm = (actors: ActorApi[]) => {
  if (!Array.isArray(actors)) return [];

  return actors.map(mapActorApiToVm);
};

export const mapActorApiToVm = (actor: ActorApi): ActorVm => {
  return {
    episode: actor.episode,
    gender: actor.gender,
    id: actor.id,
    image: actor.image,
    name: actor.name,
    species: actor.species,
    status: actor.status,
    type: actor.type,
    url: actor.url,
  };
};
