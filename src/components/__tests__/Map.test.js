import React from 'react';
import {shallow} from 'enzyme';
import Map from './../Map';


describe("Map",()=>{
    let mountedMap;

    beforeEach(()=>{
        mountedMap = shallow(<Map/>);
    })

    it('renders without crashing',()=>{
        let mountedMap = shallow(<Map/>);
    })

    it('renders an image',()=>{
        let img = mountedMap.find('img');
        // assert

        expect(img.length).toBe(1);
    })
})
