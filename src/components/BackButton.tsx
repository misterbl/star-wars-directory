import React, { PureComponent } from "react";

interface IBackButton {
  route: string;
  text: string;
  push: (path: string, state?: any) => void;
  onClick?: () => void;
}
class BackButton extends PureComponent<IBackButton> {
  pushToPage = () => {
    const { push, route, onClick } = this.props;
    onClick && onClick();
    push(route);
  };
  render() {
    return (
      <div className="position-relative">
        <div className="back-button" />
        <button className="btn btn-dark ml-3 pl-4" onClick={this.pushToPage}>
          {this.props.text}
        </button>
      </div>
    );
  }
}

export default BackButton;
