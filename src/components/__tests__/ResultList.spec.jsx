/* eslint-disable no-undef */
import * as React from "react";
import { shallow } from "enzyme";
import ResultList from "../ResultList";

describe("ResultList", () => {
  const props = {
    list: ["element1", "element2"],
    type: "type"
  };
  const wrapper = shallow(<ResultList {...props} />);
  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
