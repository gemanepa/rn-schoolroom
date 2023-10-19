import React from 'react';
import { render } from '@testing-library/react-native';
import RoomItem from '@screens/rooms-overview/components/RoomItem';

// Mock the useNavigation hook
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('RoomItem', () => {
  it('should render room name and location', () => {
    const room = {
      roomId: 1,
      name: 'Sample Room',
      location: 'Sample Location',
    };

    const { getByText } = render(<RoomItem room={room} />);
    const nameElement = getByText('Sample Room');
    const locationElement = getByText('Sample Location');

    expect(nameElement).toBeTruthy();
    expect(locationElement).toBeTruthy();
  });
});
