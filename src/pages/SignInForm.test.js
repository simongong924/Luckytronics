import React from 'react';
import { shallow } from 'enzyme';
import {SignInForm} from '../SignInForm';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import 'jest-extended';

configure({ adapter: new Adapter() });

describe('<SignInForm />',() => {
	let wrapper;
it("renders without error",() =>{
const SignInComponent = renderer.create(
<SignInForm />).toJSON();

	expect(SignInComponent).toMatchSnapshot();
});

it('check if email and password is null on render',()=> {
	const props = {
		email : null,
		password :null
	},
	SignInComponent = mount(<SignInForm {...props}/>);
	expect((SignInComponent).prop('password')).toEqual(null);

	expect((SignInComponent).prop('email')).toEqual(null);
});

it('check type of email',()=>{
    const johnemail ='JohnTan@gmail.com';
    const johnpw = 'johnny23';
    const props ={
        email: 'JohnTan@gmail.com',
        password:'johnny23'
    },

    SignInComponent = mount(<SignInForm {...props}/>);
    expect(SignInComponent.prop('email')).toEqual(johnemail);
    expect (SignInComponent.prop('email')).toBeString();
    expect(SignInComponent.prop('password')).toEqual(johnpw);
    expect (SignInComponent.prop('password')).toBeString();
});

it('submit empty form, receive error',()=>{
    wrapper = mount(<SignInForm/>);
    wrapper.update();
    const form = wrapper.find('form');
    expect(form.simulate('submit').handleValidation).toBeFalsy();
});

});



/*
it('render correctly text component', () => {
    const TextInputComponent = renderer.create(<SignInForm />).toJSON();
    expect(TextInputComponent).toMatchSnapshot();
});
*/
