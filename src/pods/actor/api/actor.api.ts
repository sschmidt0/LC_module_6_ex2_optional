import { gql } from '@apollo/client';
import { ActorApi } from 'core/api-models';

export const getActor = async (id: string): Promise<ActorApi> => {
  const url = `https://rickandmortyapi.com/api/character/${id}`;

  const data = await fetch(url).then((response) => response.json());

  return data;
};

export const GET_ACTOR_GQL = gql`
  query ($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
      id
      name
      gender
      image
      location {
        name
      }
      origin {
        name
      }
      species
      status
    }
  }
`;
