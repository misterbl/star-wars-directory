/* eslint-disable no-undef */
import * as React from "react";
import { shallow } from "enzyme";
import history from "../../testMocks/history.mock";
import { Home } from "../Home";

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
  it("update the state on componentWillReceiveProps", () => {
    expect(wrapper.state().fetchedPeopleList).toEqual(props.peopleList);
  });
  it("update the state on showPeople button click", () => {
    const showPeople = wrapper.find("button").at(0);
    showPeople.simulate("click");
    expect(wrapper.state().showPeople).toBeFalsy();
  });
  it("update the state on showFilms button click", () => {
    const showFilms = wrapper.find("button").at(1);
    showFilms.simulate("click");
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
