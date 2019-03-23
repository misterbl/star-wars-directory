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
      <div className="btn btn-dark mt-3 ml-3 pl-4" onClick={this.pushToPage}>
        <div className=" back-button" />
        {this.props.text}
      </div>
    );
  }
}

export default BackButton;
