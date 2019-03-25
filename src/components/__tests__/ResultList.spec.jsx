/* eslint-disable no-undef */
import * as React from "react";
import { shallow } from "enzyme";
import ResultList from "../ResultList";

describe("ResultList", () => {
  const props = {
    list: [{ title: "element1" }, { title: "element2" }],
    type: "type"
  };
  const wrapper = shallow(<ResultList {...props} />);
  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
