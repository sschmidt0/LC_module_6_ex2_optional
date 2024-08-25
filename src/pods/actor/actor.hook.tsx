import * as React from 'react';
import { GET_ACTOR_GQL, getActor } from './api/actor.api';
import { ActorVm } from './actor.vm';
import {
  mapActorApiToVm,
  mapActorGQLApiToVm,
  mapActorsGQLApiToVm,
} from './actor.mappers';
import { useQuery } from '@apollo/client';

export const useActor = (id: string) => {
  // from first exercise, also unused imports
  // const [actor, setActor] = React.useState<ActorVm>(undefined);
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [isError, setIsError] = React.useState(false);

  // React.useEffect(() => {
  //   const fetchActor = async () => {
  //     setIsLoading(true);
  //     try {
  //       const data = await getActor(id);
  //       const mappedData = mapActorApiToVm(data);
  //       setActor(mappedData);
  //     } catch (error) {
  //       setIsError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchActor();
  // }, []);

  const { data, loading, error } = useQuery(GET_ACTOR_GQL, {
    variables: { ids: id },
  });

  return {
    actors: mapActorsGQLApiToVm(data),
    isLoading: loading,
    isError: error,
  };
};
