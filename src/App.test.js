import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import List from './List';
import renderer from 'react-test-renderer';


//  Smoke test - card
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Card />, div);
  ReactDOM.unmountComponentAtNode(div)
})
 //
 // Smoke test - list
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<List />, div);
  ReactDOM.unmountComponentAtNode(div)
})


// Snapshot test - card
it('renders UI as expected', () => {
  const tree = renderer
      .create(<Card />).toJSON();
  expect(tree).toMatchSnapshot();
});

// Snapshot test - list
it('renders UI as expected', () => {
  const tree = renderer
      .create(<List />).toJSON();
  expect(tree).toMatchSnapshot();
});