import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App.tsx';

describe('App', () => {
  it('displays the initial screen', async () => {
    const { getByText } = render(<App />);
    expect(getByText('Open up App.tsx to start working on your app!')).toBeTruthy();
  });
});
