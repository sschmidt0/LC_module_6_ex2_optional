import * as React from 'react';
import { getActor } from './api/actor.api';
import { ActorVm } from './actor.vm';
import { mapActorApiToVm } from './actor.mappers';

export const useActor = (id: string) => {
  const [actor, setActor] = React.useState<ActorVm>(undefined);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    const fetchActor = async () => {
      setIsLoading(true);
      try {
        const data = await getActor(id);
        const mappedData = mapActorApiToVm(data);
        setActor(mappedData);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchActor();
  }, []);

  return {
    actor,
    isLoading,
    isError,
  };
};
