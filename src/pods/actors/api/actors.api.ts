import { ActorApi } from 'core/api-models';

export const getActors = async (): Promise<ActorApi[]> => {
  const data = await fetch('https://rickandmortyapi.com/api/character').then(
    (response) => response.json()
  );

  return data.results;
};
