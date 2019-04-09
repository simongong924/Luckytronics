import React from 'react';
import { shallow } from 'enzyme';
import homepageUser from './homepageUser';
import renderer from 'react-test-renderer';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<homepageUser />',() => {
/*
it('has 2 inputs', () => {
const editor = shallow(<SignInForm />);
expect(editor.find('input').length).toEqual(2);
});
*/
it("snaps",() =>{
const component = renderer.create(
<homepageUser />
);
let tree = component.toJSON();

expect(tree).toMatchSnapshot();
});


});
