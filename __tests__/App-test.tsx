import 'react-native';
import {Platform} from 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

jest.mock('react-native', () => ({
  Platform: {OS: 'ios'},
}));

describe('React Native Platform', () => {
  test("Platform.OS should be 'ios'", () => {
    expect(Platform.OS).toBe('ios');
  });
});
