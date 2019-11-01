import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react';

test('renders', () => {
  render(<App />);
});

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('button id', () => {
  const { getByTestId } = render(<App />)
  getByTestId(`on-switch`)

})