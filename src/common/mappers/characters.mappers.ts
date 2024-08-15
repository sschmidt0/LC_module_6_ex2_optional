import { CharacterApi } from 'core/api-models';
import { CharacterVm } from '../models/character';

export const mapCharactersApiToVm = (
  characters: CharacterApi[]
): CharacterVm[] => {
  if (!Array.isArray(characters)) return [];

  return characters.map(mapCharacterApiToVm);
};

export const mapCharacterApiToVm = (character: CharacterApi): CharacterVm => {
  return {
    id: character.id.toString(),
    name: character.name,
    bestSentence: character.bestSentence,
  };
};
