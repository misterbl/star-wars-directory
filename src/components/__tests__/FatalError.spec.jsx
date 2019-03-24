/* eslint-disable no-undef */
import * as React from "react";
import { shallow } from "enzyme";
import FatalError from "../FatalError";

describe("FatalError", () => {
  const props = {
    push: jest.fn(),
    resetFatalError: jest.fn()
  };
  const wrapper = shallow(<FatalError {...props} />);
  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("calls resetFatalError() onClick ", () => {
    const backButton = wrapper.find("BackButton").at(0);
    backButton.simulate("click");
    expect(props.resetFatalError).toHaveBeenCalled();
  });
});
