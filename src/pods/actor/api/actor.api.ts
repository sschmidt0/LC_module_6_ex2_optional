import { ActorApi } from 'core/api-models';

export const getActor = async (id: string): Promise<ActorApi> => {
  const url = `https://rickandmortyapi.com/api/character/${id}`;

  const data = await fetch(url).then((response) => response.json());

  return data;
};
