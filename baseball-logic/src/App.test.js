import React from 'react';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(rtl.cleanup);

// Does it render ball count?
it('renders ball count', () => {
  const wrapper = rtl.render(<App />)

  const element = wrapper.getByText(/ball count/i)
  expect(element).toBeVisible()
});

// Does it render strike count?
it('renders strike count', () => {
  const wrapper = rtl.render(<App />)
  const element = wrapper.getByText(/strike count/i)
  expect(element).toBeVisible()
})

