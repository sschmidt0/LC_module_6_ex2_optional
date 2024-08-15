import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CharacterComponent } from './character.component';
import { useCharacter } from './character.hook';
import { CharacterVm } from 'common/models';

export const CharacterContainer = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { character, isError, isLoading, resetCharacter, updateCharacter } =
    useCharacter(id);

  const handleSave = async (character: CharacterVm) => {
    console.log({ character });
    const success = await updateCharacter(character);

    if (success) {
      navigate(-1);
    } else {
      alert('Error on save character');
    }
  };

  const handleCancel = () => {
    resetCharacter();
    navigate(-1);
  };

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>An error has occured.</div>;

  return (
    <CharacterComponent
      character={character}
      onSave={handleSave}
      onCancel={handleCancel}
    />
  );
};
