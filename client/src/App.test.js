import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react';

test('renders', () => {
  render(<App />);
});


test('player-card is displaying', () => {
  const { getByTestId } = render(<App />)
  getByTestId(`player-card`)
})


test('toggle id', () => {
  const { getByTestId } = render(<App />)
  getByTestId(`on-switch`)
})


