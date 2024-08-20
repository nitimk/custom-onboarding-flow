import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Onboarding from '../components/Onboarding';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('Onboarding Component', () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
    mock.onGet('http://localhost:5000/api/config').reply(200, {
      page2: 'aboutMe',
      page3: 'address',
    });
  });

  afterAll(() => {
    mock.restore();
  });

  it('renders the first step of the onboarding flow', () => {
    render(<Onboarding />);

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  it('moves to the next step when Next is clicked', async () => {
    render(<Onboarding />);

    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'testuser@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });

    fireEvent.click(screen.getByText('Next'));

    // Assuming page 2 renders a text area
    expect(await screen.findByPlaceholderText('About Me')).toBeInTheDocument();
  });
});
