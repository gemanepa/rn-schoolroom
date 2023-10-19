import { formatIsoDate } from '@lib/utils/date';

describe('formatIsoDate', () => {
  it('formats an ISO date correctly', () => {
    // Define a sample ISO date and its expected output
    const isoDate = '2023-10-19T12:30:00Z';

    // Call the formatIsoDate function and check if it returns the expected output
    const formattedDate = formatIsoDate(isoDate);
    expect(formattedDate.includes('10/19/2023')).toBe(true);
  });
});
