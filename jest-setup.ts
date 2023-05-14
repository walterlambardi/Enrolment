import '@testing-library/jest-native/extend-expect';

jest.mock('react-native-localize', () => {
  return {
    getLocales: jest.fn(),
  };
});
