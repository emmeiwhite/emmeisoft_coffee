import React from "react";
import {shallow} from 'enzyme';
import Button from "./../Button";

 
// Initially just a smoke test to check whether the StoreLocation Component (internally it is a function only) exists
describe('Button',()=>{
    let mountedButton;

    beforeEach(()=>{
        mountedButton = shallow(<Button/>);
    })

    it("button renders without crashing", () => {
        let mountedButton = shallow(<Button/>);
    });

    // button DOM element should render within the Button Component

    it('should render the button element',()=>{
        let buttons = mountedButton.find('button');
        
        //assert 
        expect(buttons.length).toBe(1);
    })
    
})
