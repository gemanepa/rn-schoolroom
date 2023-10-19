import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AddRoomSubmitBtn from '@screens/add-room/components/AddRoomSubmitBtn';

describe('AddRoomSubmitBtn Component', () => {
  it('renders a submit button', () => {
    const { getByText } = render(<AddRoomSubmitBtn handleSubmit={() => {}} />);

    expect(getByText('Submit')).toBeTruthy();
  });

  it('calls handleSubmit when the submit button is clicked', () => {
    const handleSubmit = jest.fn();
    const { getByText } = render(<AddRoomSubmitBtn handleSubmit={handleSubmit} />);
    const submitButton = getByText('Submit');

    fireEvent.press(submitButton);

    expect(handleSubmit).toHaveBeenCalled();
  });
});
