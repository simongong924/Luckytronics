import React from 'react';
import { shallow } from 'enzyme';
import Ticktform from './Ticktform';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-extended';

configure({ adapter: new Adapter() });

describe('<Ticktform />',() => {
	let spy;
	let wrapper;
/*
it('has 2 inputs', () => {
const editor = shallow(<SignInForm />);
expect(editor.find('input').length).toEqual(2);
});
*/
it("renders without error",() =>{
const TicketComponent = renderer.create(
<Ticktform />).toJSON();

	expect(TicketComponent).toMatchSnapshot();
});
it('check if name is null on render',()=> {
	const props = {
		name : null

	},
	TicketComponent = mount(<Ticktform {...props}/>);
	expect((TicketComponent).prop('name')).toEqual(null);
});
it('check if subject is null on render',()=> {
	const props = {
		subject : null

	},
	TicketComponent = mount(<Ticktform {...props}/>);
	expect((TicketComponent).prop('subject')).toEqual(null);
});
it('check if details is null on render',()=> {
	const props = {
		details : null

	},
	TicketComponent = mount(<Ticktform {...props}/>);
	expect((TicketComponent).prop('details')).toEqual(null);
});


it('check type of name',()=>{

	const john = 'John Tan';
	const props ={
		name: 'John Tan'
	},
	TicketComponent = mount(<Ticktform {...props}/>);
	//TicketComponent.update()
	expect (TicketComponent.prop('name')).toEqual(john);
	expect (TicketComponent.prop('name')).toBeString();
});

it('check subject opens nicely',()=>{
	const TicketComponent = mount(<Ticktform/>),
		subjectinput = TicketComponent.find("input[type='text']");
		subjectinput.simulate('click');
		expect(TicketComponent.find('.FormField1')).toHaveLength(1);
});
it('submit empty form, assert error',()=>{
	//spy = jest.fn();
	const props ={
	//	spy
	}
	wrapper = mount(<Ticktform  {...props}/>);
	//expect(spy).not.toBeCalled();
	wrapper.update();
	//wrapper.find('button').simulate('click');
	const form = wrapper.find('form');
	const submitted = form.simulate('submit');
	expect(form.simulate('submit').handleValidation).toBeFalsy();
	//expect(submitted.handleValidation).toBeBoolean();
	//expect(spy).toBeCalled();


	/*const onSubmitFn = jest.fn();
	const wrapper = mount(<Ticktform  />)
	wrapper.instance().handleSubmit = jest.fn();
	wrapper.instance().forceUpdate();
	//const form = 
	wrapper.update();
	wrapper.find('button').simulate('click');
	//form.simulate('submit');
	expect(wrapper.instance().handleSubmit).toHaveBeenCalledTimes(1);
*/});
/*
it('submit legit form, no error',()=>{
	//spy = jest.fn();
	const credentials ={
		name:'john',
		subject :'Bug',
		details:'coding sux',
		hasAgreed: 'true'
	}
	const props ={
		name:'john',
		subject :'Bug',
		details:'coding sux',
		hasAgreed: 'true'
	//	spy
	}
	wrapper = mount(<Ticktform  {...props}/>);
	//expect(spy).not.toBeCalled();
	wrapper.update();
	//wrapper.find('button').simulate('click');
	const form = wrapper.find('form');

	const nameInput = form.find('input');
	wrapper.find('#name').simulate('change',{target:{value:'john'}});
	//nameInput.simulate('change',{target:{value:credentials.name}});
	expect(wrapper.find('#name').props().value).toEqual('john');
	const submitted = form.simulate('submit');
	expect(wrapper.find('form').simulate('submit').handleValidation).toBeFalsy();


});*/
});