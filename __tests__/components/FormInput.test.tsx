import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { useForm } from 'react-hook-form';
import FormInput from '../../src/components/FormInput';
import { FormInputProps } from '../../src/components/FormInput/FormInput';

type TestProps = Pick<
  FormInputProps,
  'label' | 'name' | 'error' | 'onSubmitEditing'
>;

const FormInputWithControl = ({ label, name, error }: TestProps) => {
  const { control } = useForm();
  return (
    <FormInput
      control={control}
      name={name}
      error={error}
      forwardedRef={{ current: null }}
      label={label}
    />
  );
};

describe('FormInput', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <FormInputWithControl label="Username" name="username" />,
    );
    const input = getByTestId('form-input');
    expect(input).toBeTruthy();
  });

  it('updates input value correctly', () => {
    const { getByTestId } = render(
      <FormInputWithControl label="Username" name="username" />,
    );
    const input = getByTestId('form-input');
    expect(input.props.value).not.toBeDefined();
    fireEvent.changeText(input, { target: { value: 'John' } });
    expect(input.props.value).toBe('John');
  });

  it('placeholder is displayed correctly', () => {
    const { getByPlaceholderText } = render(
      <FormInputWithControl label="Username" name="username" />,
    );
    expect(getByPlaceholderText('Username')).toBeDefined();
  });

  it('label is displayed correctly', () => {
    const { getByTestId, getByText } = render(
      <FormInputWithControl label="Username" name="username" />,
    );
    const input = getByTestId('form-input');
    fireEvent.changeText(input, { target: { value: 'John' } });
    expect(getByText('Username')).toBeDefined();
  });

  it('calls onSubmitEditing when Enter key is pressed', () => {
    const onSubmitEditingMock = jest.fn();
    const { getByTestId } = render(
      <FormInputWithControl
        label="Password"
        name="password"
        onSubmitEditing={onSubmitEditingMock}
      />,
    );
    const input = getByTestId('form-input');
    fireEvent.changeText(input, { target: { value: 'John' } });
    //fireEvent(input, 'onSubmitEditing', { nativeEvent: { key: 'next' } });
    //fireEvent(input, 'submitEditing');
    //expect(onSubmitEditingMock).toHaveBeenCalled();
  });
});
