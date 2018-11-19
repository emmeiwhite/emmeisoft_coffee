import React from "react";
import {shallow} from 'enzyme';   
import App from "../App";
import StoreLocator from "./../StoreLocator";

// Let's Describe our suite (sweet),  It has two cases! First to test whether APP renders
describe("App",()=>{
  it("renders without crashing", () => {
    let mountedApp = shallow(<App/>);
  });

  // Test to check whether App renders a StoreLocator :

  it('renders a StoreLocator',()=>{
    let mountedApp = shallow(<App/>);

    let locators = mountedApp.find('StoreLocator');
    // assert
    expect(locators.length).toBe(1);
  })
})

