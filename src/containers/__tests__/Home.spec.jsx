/* eslint-disable no-undef */
import * as React from "react";
import { shallow } from "enzyme";
import history from "../../testMocks/history.mock";
import { Home } from "../Home";
import ROUTES from "../../routes";

describe("Home", () => {
  const props = {
    history,
    peopleList: [
      {
        name: "name",
        height: "123",
        mass: "12",
        birth_year: "1234",
        gender: "male",
        hair_color: "hair_color",
        eye_color: "eye_color"
      },
      {
        name: "name2",
        height: "12333",
        mass: "12333",
        birth_year: "1234232",
        gender: "female",
        hair_color: "black",
        eye_color: "black"
      }
    ],
    filmsList: ["films1", "films2"]
  };
  const wrapper = shallow(<Home {...props} />);
  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("update the state on ComponentDidMount", () => {
    expect(wrapper.state().peopleList).toEqual(props.peopleList);
  });
  it("update the state on checkbox showPeople check", () => {
    const showPeople = wrapper.find("#showPeople");
    showPeople.simulate("change");
    expect(wrapper.state().showPeople).toBeFalsy();
  });
  it("update the state on checkbox showFilms check", () => {
    const showFilms = wrapper.find("#showFilms");
    showFilms.simulate("change");
    expect(wrapper.state().showFilms).toBeFalsy();
  });
  it("doesn't show the checkbox showFilms nor showPeople if peopleList is empty ", () => {
    const newProps = { ...props, peopleList: [] };
    const newWrapper = shallow(<Home {...newProps} />);
    const showFilms = newWrapper.find("#showFilms");
    const showPeople = newWrapper.find("#showPeople");
    expect(showFilms.length).toEqual(0);
    expect(showPeople.length).toEqual(0);
  });
});
