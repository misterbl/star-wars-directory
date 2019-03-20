import React, { StatelessComponent } from "react";
import Card from "./Card";
import { IResultList } from "./ResultList.d";
import { IPerson } from "../state";

const ResultList: StatelessComponent<IResultList> = ({ list, type }) => (
  <>
    <h1>{`${type} matching your search:`}</h1>
    <div className="d-flex flex-wrap p-2 bd-highlight">
      {list.map((element: IPerson) => (
        <Card content={element} />
      ))}
    </div>
  </>
);

export default ResultList;
