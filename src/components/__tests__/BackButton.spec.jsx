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
    const button = wrapper.find("button").at(0);
    button.simulate("click");
    expect(props.push).toHaveBeenCalled();
  });
});
