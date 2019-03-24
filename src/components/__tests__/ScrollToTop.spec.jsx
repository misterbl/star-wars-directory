import React from "react";
import { shallow } from "enzyme";

import { ScrollToTop } from "../ScrollToTop";
import routeComponentProps from "../../testMocks/routeComponentProps.mock";

describe("<ScrollToTop />", () => {
  global.scrollTo = jest.fn();
  jest.spyOn(window, "scrollTo");
  const props = {
    location: {
      pathname: "location"
    }
  };
  const wrapper = shallow(
    <ScrollToTop {...props}>
      <div />
    </ScrollToTop>
  );
  describe("render", () => {
    it("renders its children", () => {
      expect(wrapper.find("div").length).toBe(1);
    });
  });
  describe("#componentDidUpdate", () => {
    describe("props.location = prevProps.location", () => {
      it("doesn't call window.scrollTo", () => {
        wrapper.instance().componentDidUpdate({
          location: props.location
        });
        expect(window.scrollTo).not.toBeCalled();
      });
    });
    describe("props.location != prevProps.location", () => {
      it("doesn't call window.scrollTo", () => {
        wrapper.instance().componentDidUpdate({
          location: {
            ...routeComponentProps.location,
            pathname: "new-location"
          }
        });
        expect(window.scrollTo).toBeCalledWith(0, 0);
      });
    });
  });
});
