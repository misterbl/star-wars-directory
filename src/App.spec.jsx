/* eslint-disable no-undef */
import * as React from "react";
import { shallow } from "enzyme";
import history from "./testMocks/history.mock";
import { App } from "./App";

describe("App", () => {
  const props = {
    isLoading: false,
    isFatalError: false,
    history
  };
  const wrapper = shallow(<App {...props} />);
  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("shows the loading indicator if isLoading is true", () => {
    wrapper.setProps({ isLoading: true });
    expect(wrapper.find(".loader").length).toEqual(1);
  });
  it("shows the FatalError page if isFatalError is true", () => {
    wrapper.setProps({ isFatalError: true });
    expect(wrapper.find("FatalError").length).toEqual(1);
  });
});
