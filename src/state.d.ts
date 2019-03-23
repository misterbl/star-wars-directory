export interface ICharacter {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface IFilm {
  characters: string[];
  created: string;
  director: string;
  edited: string;
  episode_id: number;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  title: string;
  url: string;
  vehicles: string[];
}
export interface IAppState {
  app: {
    fetchingPeopleAndFilms: boolean;
    fetchingFilm: boolean;
    fetchingSingleResult: boolean;
    peopleList: ICharacter[];
    filmsList: IFilm[];
    result: IFilm & ICharacter;
    sendingInfoSms: boolean;
    isFatalError: boolean;
  };
}
