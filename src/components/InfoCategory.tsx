import React from "react";

interface IInfoCategory {
  list: string[];
  title: string;
}
const InfoCategory = ({ title, list }: IInfoCategory) => (
  <div className="info-category d-flex flex-column">
    <div>{title}</div>
    {list.map(element => (
      <p key={element}>{element}</p>
    ))}
  </div>
);

export default InfoCategory;
