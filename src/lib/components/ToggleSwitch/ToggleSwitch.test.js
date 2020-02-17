import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ToggleSwitch } from './ToggleSwitch';

afterEach(cleanup);

describe('ToggleSwitch', () => {
  test('should render correctly', () => {
    const { getByTestId } = render(<ToggleSwitch />);
    expect(getByTestId('wrapper')).toBeInTheDocument();
  });
});
