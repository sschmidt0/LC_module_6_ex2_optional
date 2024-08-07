import { ActorApi } from 'core/api-models';
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
