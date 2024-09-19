import { GET_ACTOR_GQL } from './api/actor.api';
import { mapActorsGQLApiToVm } from './actor.mappers';
import { useQuery } from '@apollo/client';

export const useActor = (id: string) => {
  const { data, loading, error } = useQuery(GET_ACTOR_GQL, {
    variables: { ids: id },
  });

  return {
    actors: mapActorsGQLApiToVm(data),
    isLoading: loading,
    isError: error,
  };
};
