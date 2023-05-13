import React from 'react';
import { render } from '@testing-library/react-native';
import CustomHeader from '../../src/components/CustomHeader';

describe('CustomHeader', () => {
  it('renders title correctly', () => {
    const { getByText } = render(<CustomHeader title="Test Title" />);
    const titleText = getByText('Test Title');
    expect(titleText).toBeDefined();
  });

  it('renders subtitle correctly', () => {
    const { getByText } = render(
      <CustomHeader title="Test Title" subtitle="Test Subtitle" />,
    );
    const subtitleText = getByText('Test Subtitle');
    expect(subtitleText).toBeDefined();
  });
});
