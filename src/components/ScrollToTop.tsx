import React, { PureComponent } from "react";
import { withRouter, RouteComponentProps, RouteProps } from "react-router";

export class ScrollToTop extends PureComponent<RouteComponentProps<any>> {
  componentDidUpdate(prevProps: RouteProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
