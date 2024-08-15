import { CharacterVm } from 'common/models';

export const createEmptyCharacter = (): CharacterVm => ({
  id: '',
  name: '',
  bestSentence: '',
});
