import React from "react";
import { shallow } from "enzyme";
import Header from "../Header.js";

// Today we'll test actual content like images etc within particular Components
describe("Header", () => {
  // common Header shallowed

  let mountedHeader;

  beforeEach(() => {
    mountedHeader = shallow(<Header />);
  });

  it("renders without crashing", () => {
    shallow(<Header />);
  });

  it("renders a logo ", () => {
    const logoImg = mountedHeader.find('img src["images/venue.jpg"]');

    // assert
    expect(logoImg.length).toBe(1);
  });
});
