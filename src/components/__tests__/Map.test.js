import React from 'react';
import {shallow} from 'enzyme';
import Map from './../Map';

it('renderws without crashing',()=>{
    let mountedMap = shallow(<Map/>);
})