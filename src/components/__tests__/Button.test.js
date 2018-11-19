import React from "react";
import {shallow} from 'enzyme';
import Button from "./../Button";

 
// Initially just a smoke test to check whether the StoreLocation Component (internally it is a function only) exists
it("renders without crashing", () => {
    let mountedButton = shallow(<Button/>);
});
