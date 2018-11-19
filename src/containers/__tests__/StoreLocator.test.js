import React from "react";
import {shallow} from 'enzyme';
import StoreLocator from "./../StoreLocator";

 
// Initially just a smoke test to check whether the StoreLocation Component (internally it is a function only) exists
it("renders without crashing", () => {
    let mountedStoreLocator = shallow(<StoreLocator/>);
});
