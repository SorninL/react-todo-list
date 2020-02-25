import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders go to try element', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Go to try/i);
  expect(linkElement).toBeInTheDocument();
});
