import * as React from 'react';
import { GET_FILTERED_ACTORS_GQL } from './api/actors.api';
import { mapActorsGQLApiToVm } from './actors.mappers';
import { useQuery } from '@apollo/client';

export const useActors = (name: string, page: number = 1) => {
  // without filtering, replacing exercise 1 with GQL
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
