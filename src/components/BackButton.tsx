import React from "react";
import { History } from "history";

interface IBackButton {
  route: string;
  text: string;
  push: (path: string, state?: any) => void;
}
const BackButton = ({ route, text, push }: IBackButton) => {
  const pushToPage = () => {
    push(route);
  };
  return (
    <div className="btn btn-dark mt-3 ml-3 pl-4" onClick={pushToPage}>
      <div className=" back-button" />
      {text}
    </div>
  );
};

export default BackButton;
