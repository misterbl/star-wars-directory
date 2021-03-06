/* eslint-disable no-undef */
import * as React from "react";
import { shallow } from "enzyme";
import history from "../../testMocks/history.mock";
import { FilmInfo } from "../FilmInfo";

describe("FilmInfo", () => {
  const props = {
    history,
    film: {
      director: "director",
      opening_crawl: "1222",
      title: "title",
      release_date: "release_date",
      producer: "producer"
    }
  };
  const wrapper = shallow(<FilmInfo {...props} />);
  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
