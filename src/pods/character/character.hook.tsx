import * as React from 'react';
import { createEmptyCharacter } from './character.business';
import { getCharacter, updateCharacter } from './api/character.api';
import { mapCharacterApiToVm } from 'common/mappers';
import { CharacterVm } from 'common/models';

export const useCharacter = (id: string) => {
  const [character, setCharacter] = React.useState(createEmptyCharacter());
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);

  const resetCharacter = () => {
    setCharacter(createEmptyCharacter());
  };

  const fetchUpdateCharacter = async (
    character: CharacterVm
  ): Promise<boolean> => {
    try {
      await updateCharacter(character);
      return true;
    } catch (error) {
      setIsError(true);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    const fetchCharacter = async () => {
      setIsLoading(true);
      try {
        const data = await getCharacter(id);
        const mappedData = mapCharacterApiToVm(data);
        setCharacter(mappedData);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacter();
  }, []);

  return {
    character,
    isLoading,
    isError,
    updateCharacter: fetchUpdateCharacter,
    resetCharacter,
  };
};
