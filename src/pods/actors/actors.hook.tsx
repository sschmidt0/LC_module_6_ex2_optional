import * as React from 'react';
import {
  GET_ACTORS_GQL,
  GET_FILTERED_ACTORS_GQL,
  getActors,
} from './api/actors.api';
import { mapActorsApiToVm, mapActorsGQLApiToVm } from './actors.mappers';
import { ActorVm } from './actors.vm';
import { useQuery } from '@apollo/client';

export const useActors = (name: string, page: number = 1) => {
  // from first exercise, therefore also unsed imports
  // const [actors, setActors] = React.useState<ActorVm[]>([]);
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [isError, setIsError] = React.useState(false);

  // React.useEffect(() => {
  //   const fetchActors = async () => {
  //     setIsLoading(true);
  //     try {
  //       const data = await getActors();
  //       const mappedData = mapActorsApiToVm(data);
  //       setActors(mappedData);
  //     } catch (error) {
  //       setIsError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchActors();
  // }, []);

  // const { data, loading, error } = useQuery(GET_ACTORS_GQL);
  const { data, loading, error } = useQuery(GET_FILTERED_ACTORS_GQL, {
    variables: { filter: { name: name }, page: page },
  });

  return {
    actors: mapActorsGQLApiToVm(data),
    isLoading: loading,
    isError: error,
  };
};

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
