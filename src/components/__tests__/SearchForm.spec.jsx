import * as React from "react";
import { shallow } from "enzyme";
import SearchForm from "../SearchForm";

describe("SearchForm", () => {
  const props = {
    setFieldValue: jest.fn(),
    values: {
      searchTerm: "searchTerm"
    },
    handleSubmit: jest.fn()
  };
  const wrapper = shallow(<SearchForm {...props} />);
  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("calls setFieldValue on input change", () => {
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: "value" } });
    expect(props.setFieldValue).toHaveBeenCalledWith("searchTerm", "value");
  });
  it("calls handleSubmit on form submit", () => {
    const form = wrapper.find("form");
    form.simulate("submit");
    expect(props.handleSubmit).toHaveBeenCalled();
  });
});
