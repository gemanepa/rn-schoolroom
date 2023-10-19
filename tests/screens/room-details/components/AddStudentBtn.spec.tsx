import React from 'react';
import { render } from '@testing-library/react-native';
import AddStudentBtn from '@screens/room-details/components/AddStudentBtn';

// Mocking the required modules
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('AddStudentBtn', () => {
  it('renders the "Add Student" button', () => {
    const { getByText } = render(<AddStudentBtn room="mockedRoom" />);
    const addButton = getByText('Add Student');
    expect(addButton).toBeTruthy();
  });
});
