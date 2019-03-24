/* eslint-disable no-undef */
import * as React from "react";
import { shallow } from "enzyme";
import history from "../../testMocks/history.mock";
import { FilmCard } from "../FilmCard";
import ROUTES from "../../const/routes";

describe("FilmCard", () => {
  const props = {
    assignCurrentView: jest.fn(),
    history,
    film: {
      director: "name",
      release_date: "1222",
      title: "title"
    }
  };
  const wrapper = shallow(<FilmCard {...props} />);
  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("calls assignCurrentView() onClick ", () => {
    const li = wrapper.find("li").at(0);
    li.simulate("click");
    expect(props.assignCurrentView).toHaveBeenCalled();
  });
  it("calls push() onClick ", () => {
    const li = wrapper.find("li").at(0);
    li.simulate("click");
    expect(props.history.push).toHaveBeenCalledWith(ROUTES.FILM);
  });
});
