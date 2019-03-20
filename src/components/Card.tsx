import React from "react";

const Card = ({ content }: any) => (
  <div className="card m-2" style={{ width: "18rem" }}>
    <img src="..." className="card-img-top" alt="..." />
    <div className="card-body">
      <p className="card-text">{content.name || content.title}</p>
    </div>
  </div>
);

export default Card;
