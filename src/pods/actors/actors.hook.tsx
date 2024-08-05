import * as React from 'react';
import { getActors } from './api/actors.api';
import { mapActorsApiToVm } from './actors.mappers';
import { ActorVm } from './actors.vm';

export const useActors = () => {
  const [actors, setActors] = React.useState<ActorVm[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    const fetchActors = async () => {
      setIsLoading(true);
      try {
        const data = await getActors();
        const mappedData = mapActorsApiToVm(data);
        setActors(mappedData);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchActors();
  }, []);

  return {
    actors,
    isLoading,
    isError,
  };
};
