import * as React from "react";
import { shallow } from "enzyme";
import SelectGenderForm from "../SelectGenderForm";

describe("SelectGenderForm", () => {
  const props = {
    setFieldValue: jest.fn(),
    values: {
      selectedGender: "selectedGender"
    },
    handleSubmit: jest.fn()
  };
  const wrapper = shallow(<SelectGenderForm {...props} />);
  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("calls setFieldValue on input change", () => {
    const select = wrapper.find("select");
    select.simulate("change", { target: { value: "value" } });
    expect(props.setFieldValue).toHaveBeenCalledWith("selectedGender", "value");
  });
  it("calls handleSubmit on form submit", () => {
    const form = wrapper.find("form");
    form.simulate("submit");
    expect(props.handleSubmit).toHaveBeenCalled();
  });
});
