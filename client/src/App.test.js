import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders onboarding title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Onboarding/i);
  expect(titleElement).toBeInTheDocument();
});
