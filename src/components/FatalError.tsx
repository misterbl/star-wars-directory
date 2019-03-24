import React from "react";
import ROUTES from "../const/routes";
import BackButton from "./BackButton";

interface IFatalError {
  push: (path: string, state?: any) => void;
  resetFatalError: () => void;
}

const FatalError = ({ push, resetFatalError }: IFatalError) => (
  <div className="fatal-error">
    <BackButton
      text="Back home"
      route={ROUTES.INDEX}
      push={push}
      onClick={resetFatalError}
    />
  </div>
);

export default FatalError;
