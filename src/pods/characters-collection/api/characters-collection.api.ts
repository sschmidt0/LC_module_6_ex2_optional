import { CharacterApi } from 'core/api-models';

export const getCharacters = async (): Promise<CharacterApi[]> => {
  const url = 'http://localhost:8000/characters';

  const data = await fetch(url).then((response) => response.json());

  return data;
};
