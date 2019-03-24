import React, { FunctionComponent } from "react";
import CharacterCard from "./CharacterCard";
import FilmCard from "./FilmCard";
import { IResultList } from "./ResultList.d";
import { ICharacter, IFilm } from "../state";

const ResultList: FunctionComponent<IResultList> = ({
  list,
  type,
  children
}: IResultList) => (
  <>
    <div className="grey-line" />
    <h3 className="text-white my-3 text-center">{`${type}:`}</h3>
    {children}
    <div className="grey-line mt-3" />
    <div className="p-2 mt-3">
      {list.map(element => {
        if (type === "Characters") {
          const character = element as ICharacter;
          return <CharacterCard key={character.name} character={character} />;
        }
        const film = element as IFilm;
        return <FilmCard key={film.title} film={film} />;
      })}
    </div>
  </>
);

export default ResultList;
