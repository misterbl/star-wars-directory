import * as React from "react";
import { shallow } from "enzyme";
import SelectFilmForm from "../SelectFilmForm";

describe("SelectFilmForm", () => {
  const props = {
    setFieldValue: jest.fn(),
    values: {
      selectedFilm: "selectedFilm"
    },
    handleSubmit: jest.fn()
  };
  const wrapper = shallow(<SelectFilmForm {...props} />);
  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("calls setFieldValue on input change", () => {
    const select = wrapper.find("select");
    select.simulate("change", { target: { value: "value" } });
    expect(props.setFieldValue).toHaveBeenCalledWith("selectedFilm", "value");
  });
  it("calls handleSubmit on form submit", () => {
    const form = wrapper.find("form");
    form.simulate("submit");
    expect(props.handleSubmit).toHaveBeenCalled();
  });
});
