import React from 'react';
import { render } from '@testing-library/react-native';
import RoomsList from '@screens/rooms-overview/components/RoomsList';

// Define a mock useSelector for Redux
jest.mock('@store/hooks', () => ({
  useAppSelector: (selector) =>
    selector({
      rooms: {
        rooms: [
          {
            roomId: 1,
            name: 'Sample Room',
            location: 'Sample Location',
          },
        ],
      },
    }),
}));

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('RoomsList', () => {
  it('should render without errors', () => {
    const { getByText } = render(<RoomsList />);
    // You can add assertions here to check for specific text or elements in the component
    expect(getByText('Sample Room')).toBeTruthy(); // Replace 'Rooms List' with an element in your component.
  });

  // Add more test cases as needed
});
