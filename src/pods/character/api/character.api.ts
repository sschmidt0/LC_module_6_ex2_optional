import { CharacterVm } from 'common/models';
import { CharacterApi } from 'core/api-models';

export const getCharacter = async (id: string): Promise<CharacterApi> => {
  const url = `http://localhost:8000/characters/${id}`;

  const data = await fetch(url).then((response) => response.json());

  return data;
};

export const updateCharacter = async (
  character: CharacterVm
): Promise<boolean> => {
  const url = `http://localhost:8000/characters/${character.id}`;
  const updatedSentence = { bestSentence: character.bestSentence };
  console.log({ updatedSentence });

  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedSentence),
  });

  return response.ok;
};
