import React from 'react';
import { render } from '@testing-library/react-native';
import AddStudentForm from '@screens/add-student/components/AddStudentForm';

// Mock the useAddStudentForm hook
jest.mock('@screens/add-student/hooks/useAddStudentForm', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    formState: {
      studentId: '',
      name: '',
      age: '',
      gender: 'Male',
    },
    validationErrors: {},
    handleChange: jest.fn(),
    handleSubmit: jest.fn(),
  })),
}));

// Define a mock room
const mockRoom = {
  roomId: 1,
  name: 'Sample Room',
  description: 'Sample Description',
  location: 'Sample Location',
  createdAt: '2022-01-01',
  students: [],
  capacity: '10',
  roomUsagePolicies: 'Sample Policies',
};

describe.skip('AddStudentForm', () => {
  test('renders a gender text', () => {
    const { getByText } = render(<AddStudentForm room={mockRoom} />);

    // Check if the submit button is rendered
    expect(getByText('Gender')).toBeTruthy();
  });
  test('renders a submit button', () => {
    const { getByText } = render(<AddStudentForm room={mockRoom} />);

    // Check if the submit button is rendered
    expect(getByText('Submit')).toBeTruthy();
  });
});
