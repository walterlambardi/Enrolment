import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomButton from '../../src/components/CustomButton';
import colors from '../../src/themes/colors';

const mockOnPress = jest.fn();

describe('CustomButton', () => {
  it('Tests that the button renders with the correct title and color', () => {
    const { getByTestId } = render(
      <CustomButton
        onPress={mockOnPress}
        title="Test Button"
        color={colors.red}
      />,
    );
    const button = getByTestId('custom-button');
    expect(button).toHaveStyle({ backgroundColor: colors.red });
    expect(button).toHaveTextContent('Test Button');
  });

  it('Tests that the onPress function is called when the button is pressed', () => {
    const { getByTestId } = render(
      <CustomButton onPress={mockOnPress} title="Test Button" />,
    );
    const button = getByTestId('custom-button');
    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalled();
  });

  it('Tests that the button renders with the default color if no color prop is passed', () => {
    const { getByTestId } = render(
      <CustomButton onPress={mockOnPress} title="Test Button" />,
    );
    const button = getByTestId('custom-button');
    expect(button).toHaveStyle({ backgroundColor: colors.green });
  });

  it('Tests that the button is disabled if the disabled prop is true', () => {
    const { getByTestId } = render(
      <CustomButton
        onPress={mockOnPress}
        title="Test Button"
        disabled={true}
      />,
    );
    const button = getByTestId('custom-button');
    expect(button).toBeDisabled();
  });

  it('Tests that the button style prop is applied correctly', () => {
    const { getByTestId } = render(
      <CustomButton
        onPress={mockOnPress}
        title="Test Button"
        style={{ borderWidth: 1, borderColor: colors.black }}
      />,
    );
    const button = getByTestId('custom-button');
    expect(button).toHaveStyle({ borderWidth: 1, borderColor: colors.black });
  });

  it('Tests that the disabled button has the correct opacity', () => {
    const { getByTestId } = render(
      <CustomButton
        onPress={mockOnPress}
        title="Test Button"
        disabled={true}
      />,
    );
    const button = getByTestId('custom-button');
    expect(button).toHaveStyle({ opacity: 0.5 });
  });
});
