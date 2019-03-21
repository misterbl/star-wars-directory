/* eslint-disable no-undef */
import * as React from "react";
import { shallow } from "enzyme";
import history from "../../testMocks/history.mock";
import { Header } from "../Header";
import ROUTES from "../../routes";

describe("Header", () => {
  const props = {
    history,
    searchFilmsAndPeople: jest.fn()
  };
  const wrapper = shallow(<Header {...props} />);
  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("calls searchFilmsAndPeople() Formik onSubmit ", () => {
    const mainDiv = wrapper.find("Formik");
    mainDiv.simulate("submit", { searchTerm: "searchTerm" });
    expect(props.searchFilmsAndPeople).toHaveBeenCalled();
  });
  it("calls push() Formik onSubmit ", () => {
    const mainDiv = wrapper.find("div").at(0);
    mainDiv.simulate("click");
    expect(props.history.push).toHaveBeenCalledWith(ROUTES.INDEX);
  });
});
