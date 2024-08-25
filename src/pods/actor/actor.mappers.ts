import { ActorApi, ActorsByIdGQLApi } from 'core/api-models';
import { ActorVm } from './actor.vm';

export const mapActorApiToVm = (actor: ActorApi): ActorVm => {
  return {
    id: actor?.id,
    name: actor?.name,
    gender: actor?.gender,
    image: actor?.image,
    location: actor?.location?.name,
    origin: actor?.origin?.name,
    species: actor?.species,
    status: actor?.status,
  };
};

export const mapActorsGQLApiToVm = (actors: ActorsByIdGQLApi): ActorVm[] => {
  if (!Array.isArray(actors?.charactersByIds)) return [];

  return actors?.charactersByIds.map(mapActorGQLApiToVm);
};

export const mapActorGQLApiToVm = (
  actor: ActorsByIdGQLApi['charactersByIds'][0]
): ActorVm => {
  console.log({ actor });
  return {
    id: Number(actor?.id),
    name: actor?.name,
    gender: actor?.gender,
    image: actor?.image,
    location: actor?.location?.name,
    origin: actor?.origin?.name,
    species: actor?.species,
    status: actor?.status,
  };
};
