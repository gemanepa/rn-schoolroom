import React from 'react';

import { render } from '@testing-library/react-native';
import GenderSection from '@screens/add-student/components/GenderSection';

describe('GenderSection Component', () => {
  it('renders the component correctly', () => {
    const { getByText, getByTestId } = render(
      <GenderSection genderState="Male" handleChange={() => {}} />
    );

    // Check if the "Gender" text is displayed
    expect(getByText('Gender')).toBeTruthy();
  });
});
