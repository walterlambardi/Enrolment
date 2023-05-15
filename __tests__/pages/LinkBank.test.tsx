import React from 'react';
import { render } from '@testing-library/react-native';
import LinkBank from '../../src/pages/LinkBank';

describe('LinkBank', () => {
  it('renders correctly', () => {
    const { getByText } = render(<LinkBank />);
    expect(getByText('Link your bank!')).toBeTruthy();
    expect(getByText('Family banking')).toBeTruthy();
    expect(
      getByText(
        'Linking your bank lets you use all of Goalsetter’s amazing features. Every member of your family can save, gift, learn, earn, and spend money... smartly.',
      ),
    ).toBeTruthy();
    expect(getByText('LINK A BANK')).toBeTruthy();
  });
});
