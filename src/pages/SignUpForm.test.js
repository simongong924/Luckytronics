import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-extended';
import SignUpForm from './SignUpForm';

//import { ENGINE_METHOD_STORE } from 'constants';
configure({ adapter: new Adapter() });

describe('<SignUpForm />',() => {
    let wrapper;
/*
it('has 2 inputs', () => {
const editor = shallow(<SignInForm />);
expect(editor.find('input').length).toEqual(2);
});
*/
it("renders without error",() =>{
const SignUpComponent = renderer.create(
<SignUpForm />).toJSON();

    expect(SignUpComponent).toMatchSnapshot();
});
it('check if default inputs are null/false on render',()=> {
    const props = {
        name : null,
        password : null,
        email : null,
        hasAgreed: false


    },
    SignUpComponent = mount(<SignUpForm {...props}/>);
    expect((SignUpComponent).prop('name')).toEqual(null);
    expect((SignUpComponent).prop('email')).toEqual(null);
    expect((SignUpComponent).prop('password')).toEqual(null);
    expect((SignUpComponent).prop('hasAgreed')).toBeFalsy();
});



it('check type of name',()=>{
    const john ='John Tan';
    const props ={
        name: 'John Tan'
    },

    SignUpComponent = mount(<SignUpForm {...props}/>);
    expect(SignUpComponent.prop('name')).toEqual(john);
    expect (SignUpComponent.prop('name')).toBeString();
});

it('submit empty form, receive error',()=>{
    wrapper = mount(<SignUpForm/>);
    wrapper.update();
    const form = wrapper.find('form');
    expect(form.simulate('submit').handleValidation).toBeFalsy();
});
/*
it('check submit error', ()=>{
    const props ={
        name:'John'

    },
    SignUpComponent = mount(<SignUpForm{...props}/>);
    submitform = SignUpComponent.find('Sign Up');
    submitform.simulate('click');
    expect(SignUpComponent.to)


}*/
});



/*
it('render correctly text component', () => {  
    const TextInputComponent = renderer.create(<SignUpForm />).toJSON();
    expect(TextInputComponent).toMatchSnapshot();
});
*/