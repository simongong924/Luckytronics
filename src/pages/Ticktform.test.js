import React from 'react';
import { shallow } from 'enzyme';
import Ticktform from './Ticktform';
import renderer from 'react-test-renderer';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Ticktform />',() => {
/*
it('has 2 inputs', () => {
const editor = shallow(<SignInForm />);
expect(editor.find('input').length).toEqual(2);
});
*/
it("snaps",() =>{
const component = renderer.create(
<Ticktform />
);
let tree = component.toJSON();

expect(tree).toMatchSnapshot();
});


});
