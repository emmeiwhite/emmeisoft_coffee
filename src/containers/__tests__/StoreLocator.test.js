import React from "react";
import {shallow} from 'enzyme';
import StoreLocator from "./../StoreLocator";

 
// Initially just a smoke test to check whether the StoreLocation Component (internally it is a function only) exists

describe("StoreLocator",function(){
    let mountedStoreLocator;
    beforeEach(()=>{
        mountedStoreLocator = shallow(<StoreLocator/>);
    })

    it("renders without crashing", () => {
        let mountedStoreLocator = shallow(<StoreLocator/>);
    });     
    
    it('renders a header',function(){
        const headers = mountedStoreLocator.find('Header');
        // assert

        expect(headers.length).toBe(1);
    });

    it('renders two buttons',function(){
        const buttons = mountedStoreLocator.find('Button');
        // assert
        expect(buttons.length).toBe(2);
    })

})

