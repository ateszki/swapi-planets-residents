import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';



test('renders planets and residents', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Planets and Residents/i);
  expect(linkElement).toHaveLength(2);
});


it('renders App without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


