import React from 'react';
import { render } from '@testing-library/react-native';
import TermsOfService from '../../src/pages/TermsOfService';

describe('TermsOfService', () => {
  test('renders correctly', () => {
    const { getByText } = render(<TermsOfService />);

    expect(
      getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ),
    ).toBeTruthy();

    expect(
      getByText(
        '1. Excepteur sint occaecat cupidatat non proident, sunt in culpa quiofficia deserunt mollit anim id est laborum.n. .',
      ),
    ).toBeTruthy();

    expect(
      getByText(
        '2. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumdolore eu fugiat nulla pariatur.',
      ),
    ).toBeTruthy();

    expect(
      getByText(
        '3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      ),
    ).toBeTruthy();
  });
});
