import * as React from "react";
import { shallow } from "enzyme";
import InfoCategory from "../InfoCategory";

describe("InfoCategory", () => {
  const props = {
    title: "title",
    list: ["item1", "item2"]
  };
  const wrapper = shallow(<InfoCategory {...props} />);
  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
