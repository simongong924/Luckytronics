import React from 'react';
import { shallow } from 'enzyme';
import SignUpForm from './SignUpForm';
import renderer from 'react-test-renderer';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//import { ENGINE_METHOD_STORE } from 'constants';
configure({ adapter: new Adapter() });

describe('<SignUnForm />',() => {
    it('has 5 inputs', () => {
        const SignUp = shallow(<SignUpForm />);
        expect(SignUp.find('input').length).toEqual(5);
      });

    /*it('checks email',() =>{
        const SignUp = shallow(<SignUpForm />);
        
        SignUp.setState({
            email: '1',
            password: '123',
            name: 'jane',
            company: 'coe',
            hasAgreed: true
        })
    });*/
});


/*
it('render correctly text component', () => {  
    const TextInputComponent = renderer.create(<SignUpForm />).toJSON();
    expect(TextInputComponent).toMatchSnapshot();
});
*/