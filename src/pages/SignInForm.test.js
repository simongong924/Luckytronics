import React from 'react';
import { shallow } from 'enzyme';
import SignInForm from './SignInForm';
import renderer from 'react-test-renderer';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<SignInForm />',() => {
    it('has 2 inputs', () => {
        const editor = shallow(<SignInForm />);
        expect(editor.find('input').length).toEqual(2);
      });
});


/*
it('render correctly text component', () => {  
    const TextInputComponent = renderer.create(<SignInForm />).toJSON();
    expect(TextInputComponent).toMatchSnapshot();
});
*/
