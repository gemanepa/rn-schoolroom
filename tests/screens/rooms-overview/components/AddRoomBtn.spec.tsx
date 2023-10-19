import React from 'react';
import { render } from '@testing-library/react-native';
import AddRoomBtn from '@screens/rooms-overview/components/AddRoomBtn';

// Mock the useNavigation hook
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('AddRoomBtn', () => {
  it('should render the Add Room button', () => {
    const { getByText } = render(<AddRoomBtn />);
    const addButton = getByText('Add Room');
    expect(addButton).toBeTruthy();
  });
});
