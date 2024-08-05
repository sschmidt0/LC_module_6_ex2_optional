import { ActorApi } from './actors.api-model';

export const getActors = async (): Promise<ActorApi[]> => {
  const data = await fetch('https://rickandmortyapi.com/api/character').then(
    (response) => response.json()
  );

  return data.results;
};
