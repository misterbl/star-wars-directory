/* eslint-disable no-undef */
import * as React from "react";
import { shallow } from "enzyme";
import history from "../../testMocks/history.mock";
import { CharacterCard } from "../CharacterCard";
import ROUTES from "../../routes";

describe("CharacterCard", () => {
  const props = {
    history,
    singleSearch: jest.fn(),
    character: {
      name: "name",
      height: "123",
      mass: "12",
      birth_year: "1234",
      gender: "gender"
    }
  };
  const wrapper = shallow(<CharacterCard {...props} />);
  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("calls singleSearch() onClick ", () => {
    const mainDiv = wrapper.find("div").at(0);
    mainDiv.simulate("click");
    expect(props.singleSearch).toHaveBeenCalled();
  });
  it("calls push() onClick ", () => {
    const mainDiv = wrapper.find("div").at(0);
    mainDiv.simulate("click");
    expect(props.history.push).toHaveBeenCalledWith(ROUTES.CHARACTER);
  });
});
