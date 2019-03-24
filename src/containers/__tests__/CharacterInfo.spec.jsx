/* eslint-disable no-undef */
import * as React from "react";
import { shallow } from "enzyme";
import history from "../../testMocks/history.mock";
import { CharacterInfo } from "../CharacterInfo";

describe("CharacterInfo", () => {
  const props = {
    history,
    character: {
      name: "name",
      height: "123",
      mass: "12",
      birth_year: "1234",
      gender: "gender",
      hair_color: "hair_color",
      eye_color: "eye_color"
    }
  };
  const wrapper = shallow(<CharacterInfo {...props} />);
  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
