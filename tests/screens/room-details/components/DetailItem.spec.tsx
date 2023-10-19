import React from 'react';
import { render } from '@testing-library/react-native';
import DetailItem from '@screens/room-details/components/DetailItem';

describe('DetailItem', () => {
  test('renders label and value correctly', () => {
    const label = 'Name';
    const value = 'John Doe';

    const { getByText } = render(<DetailItem label={label} value={value} />);

    const labelElement = getByText(`${label}:`);
    const valueElement = getByText(value);

    expect(labelElement).toBeTruthy();
    expect(valueElement).toBeTruthy();
  });
});
