import React from 'react';
import {shallow} from 'enzyme';
import CardScanner from './../CardScanner';

describe('CardScanner',()=>{
    it('renders without crashing',()=>{
        let mountedCardScanner = shallow(<CardScanner/>);
    })
})