import React from 'react';
import { render } from '@testing-library/react-native';
import RoomStudents from '@screens/room-details/components/RoomStudents';

// Define sample student data
const students = [
  {
    id: '1',
    name: 'John Doe',
    age: 25,
    gender: 'Male',
    createdAt: '2022-01-01',
  },
  {
    id: '2',
    name: 'Jane Smith',
    age: 22,
    gender: 'Female',
    createdAt: '2022-01-02',
  },
];

describe('RoomStudents', () => {
  test('renders student information', () => {
    const { getByText } = render(<RoomStudents students={students} />);

    // Check if student names and their information are rendered
    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('Jane Smith')).toBeTruthy();
  });

  test('renders "Students:" label', () => {
    const { getByText } = render(<RoomStudents students={students} />);
    expect(getByText('Students:')).toBeTruthy();
  });
});
