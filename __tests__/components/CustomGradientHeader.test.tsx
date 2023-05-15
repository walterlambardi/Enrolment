import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomGradientHeader from '../../src/components/CustomGradientHeader';

export const mockedNavigation = jest.fn();
jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      goBack: mockedNavigation,
    }),
  };
});

describe('CustomGradientHeader', () => {
  it('renders title without errors', () => {
    const { getByTestId, getByText } = render(
      <CustomGradientHeader title="Test Title" />,
    );

    const linearGradient = getByTestId('linearGradient');
    expect(linearGradient).toBeDefined();
    expect(getByText('Test Title')).toBeDefined();
  });

  it('calls navigation.goBack() when backButton is pressed', () => {
    const { getByTestId } = render(<CustomGradientHeader title="Test" />);

    const backButton = getByTestId('backButton');
    fireEvent.press(backButton);
    expect(mockedNavigation).toHaveBeenCalled();
  });
});
