import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import CreateAccount from '../../src/pages/CreateAccount';
import { act } from 'react-test-renderer';

describe('CreateAccount', () => {
  it('renders title and subtitle', () => {
    const { getByText } = render(<CreateAccount />);

    expect(getByText('Create Your Account')).toBeTruthy();
    expect(
      getByText(
        'You can be a parent, godparent, grandparent or even a favorite aunt. We’ll add the kids after!',
      ),
    ).toBeTruthy();
  });

  it('navigates to Terms of Service on link press', async () => {
    const mockNavigate = jest.fn();
    const { getByText } = render(
      <CreateAccount navigation={{ navigate: mockNavigate }} />,
    );

    await act(async () => {
      fireEvent.press(getByText('Terms of Service.'));
      expect(mockNavigate).toHaveBeenCalledWith('TermsOfService');
    });
  });

  it('renders form inputs', () => {
    const { getByPlaceholderText } = render(<CreateAccount />);
    expect(getByPlaceholderText('First Name')).toBeTruthy();
    expect(getByPlaceholderText('Last Name')).toBeTruthy();
    expect(getByPlaceholderText('Email Address')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
  });

  it('fill form inputs and validate submit button', async () => {
    const mockNavigate = jest.fn();
    const { getByPlaceholderText, getByTestId } = render(
      <CreateAccount navigation={{ navigate: mockNavigate }} />,
    );

    //Button disabled
    const button = getByTestId('custom-button');
    expect(button).toHaveStyle({ opacity: 0.5 });
    expect(button).toBeDisabled();

    //Fill form inputs
    const firstName = getByPlaceholderText('First Name');
    expect(firstName).toBeTruthy();
    fireEvent.changeText(firstName, { target: { value: 'John' } });
    expect(firstName.props.value).toBe('John');

    const lastName = getByPlaceholderText('Last Name');
    expect(lastName).toBeTruthy();
    fireEvent.changeText(lastName, { target: { value: 'Doe' } });
    expect(lastName.props.value).toBe('Doe');

    const emailAddress = getByPlaceholderText('Email Address');
    expect(emailAddress).toBeTruthy();
    fireEvent.changeText(emailAddress, { target: { value: 'test@test.com' } });
    expect(emailAddress.props.value).toBe('test@test.com');

    const password = getByPlaceholderText('Password');
    expect(password).toBeTruthy();
    fireEvent.changeText(password, { target: { value: '1234' } });
    expect(password.props.value).toBe('1234');

    //Expect button to be enabled
    await waitFor(
      () => {
        expect(button).toBeEnabled();
        fireEvent.press(button);
        //expect(mockNavigate).toHaveBeenCalled();
      },
      {
        timeout: 100,
      },
    );
  });
});
