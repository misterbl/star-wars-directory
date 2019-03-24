/* eslint-disable no-undef */
import * as React from "react";
import { shallow } from "enzyme";
import history from "../../testMocks/history.mock";
import { CharacterCard } from "../CharacterCard";
import ROUTES from "../../const/routes";

describe("CharacterCard", () => {
  const props = {
    history,
    assignCurrentView: jest.fn(),
    character: {
      name: "name",
      height: "123",
      mass: "12",
      birth_year: "1234",
      gender: "gender"
    },
    getCharacterDetails: jest.fn()
  };
  const wrapper = shallow(<CharacterCard {...props} />);

  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("calls assignCurrentView() onClick ", () => {
    const mainDiv = wrapper.find("div").at(0);
    mainDiv.simulate("click");
    expect(props.assignCurrentView).toHaveBeenCalled();
  });
  it("calls assignCurrentView() onClick ", () => {
    const mainDiv = wrapper.find("div").at(0);
    mainDiv.simulate("click");
    expect(props.assignCurrentView).toHaveBeenCalledWith(props.character);
  });
});
