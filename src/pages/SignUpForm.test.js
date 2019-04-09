import React from 'react';
import { shallow } from 'enzyme';
import SignUpForm from './SignUpForm';
import renderer from 'react-test-renderer';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//import { ENGINE_METHOD_STORE } from 'constants';
configure({ adapter: new Adapter() });

describe('<SignUpForm />',() => {
/*
it('has 2 inputs', () => {
const editor = shallow(<SignInForm />);
expect(editor.find('input').length).toEqual(2);
});
*/
it("snaps",() =>{
const component = renderer.create(
<SignUpForm />
);
let tree = component.toJSON();

 expect(tree).toMatchSnapshot();
});


});



/*
it('render correctly text component', () => {  
    const TextInputComponent = renderer.create(<SignUpForm />).toJSON();
    expect(TextInputComponent).toMatchSnapshot();
});
*/