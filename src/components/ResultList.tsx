import React, { StatelessComponent } from "react";
import CharacterCard from "./CharacterCard";
import FilmCard from "./FilmCard";
import { IResultList } from "./ResultList.d";
import { ICharacter, IFilm } from "../state";

const ResultList: StatelessComponent<IResultList> = ({
  list,
  type,
  children
}) => (
  <>
    <div className="grey-line" />
    <h3 className="text-white my-3 text-center">{`${type}:`}</h3>
    {children}
    <div className="grey-line mt-3" />
    <div className="p-2 mt-3">
      {list.map((element: ICharacter & IFilm) => {
        if (type === "Characters") {
          // @ts-ignore
          return <CharacterCard key={element.name} character={element} />;
        }
        // @ts-ignore
        return <FilmCard key={element.title} film={element} />;
      })}
    </div>
  </>
);

export default ResultList;
