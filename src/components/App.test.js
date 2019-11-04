import React from 'react'
import {shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import App from './App';

const app = shallow(<App/>);

it('renders correctly',()=>{

    expect(app).toMatchSnapshot();

});

it('intialise the `state` with an empty list of gifts',()=>{

    expect(app.state().gifts).toEqual([]);

});

it('add a new gift to a `state` when clicking a button',() => {

    app.find('.btn-add').simulate('click');

    expect(app.state().gifts.length).toEqual(1);


});
