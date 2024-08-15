import * as React from 'react';
import { getCharacters } from './api/characters-collection.api';
import { mapCharactersApiToVm } from 'common/mappers';
import { CharacterVm } from 'common/models';

export const useCharacters = () => {
  const [characters, setCharacters] = React.useState<CharacterVm[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);
      try {
        const data = await getCharacters();
        const mappedData = mapCharactersApiToVm(data);
        setCharacters(mappedData);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return { characters, isLoading, isError };
};
