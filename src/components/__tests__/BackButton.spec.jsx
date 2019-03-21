/* eslint-disable no-undef */
import * as React from "react";
import { shallow } from "enzyme";
import BackButton from "../BackButton";

describe("BackButton", () => {
  const props = {
    route: "route",
    text: "text",
    push: jest.fn()
  };
  const wrapper = shallow(<BackButton {...props} />);
  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("calls push() onClick ", () => {
    const mainDiv = wrapper.find("div").at(0);
    mainDiv.simulate("click");
    expect(props.push).toHaveBeenCalled();
  });
});
