/* eslint-disable no-undef */
import * as React from "react";
import { shallow } from "enzyme";
import history from "../../testMocks/history.mock";
import { FilmCard } from "../FilmCard";
import ROUTES from "../../routes";

describe("FilmCard", () => {
  const props = {
    history,
    singleSearch: jest.fn(),
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
  it("calls singleSearch() onClick ", () => {
    const mainDiv = wrapper.find("div").at(0);
    mainDiv.simulate("click");
    expect(props.singleSearch).toHaveBeenCalled();
  });
  it("calls push() onClick ", () => {
    const mainDiv = wrapper.find("div").at(0);
    mainDiv.simulate("click");
    expect(props.history.push).toHaveBeenCalledWith(ROUTES.FILM);
  });
});
