export interface ActorApi {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ActorsGQLApi {
  characters: {
    results: ActorGQLApi[];
  };
}

interface ActorGQLApi {
  id: string;
  name: string;
}
