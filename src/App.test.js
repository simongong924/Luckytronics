
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer'
// import { exportAllDeclaration } from '@babel/types';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("first snapshot test",() => {
  const component = renderer.create(
    <App />
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})
