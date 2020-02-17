import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { ToggleSwitch } from './ToggleSwitch';

afterEach(cleanup);

describe('ToggleSwitch', () => {
  test('should render correctly', () => {
    const { getByTestId } = render(<ToggleSwitch />);
    expect(getByTestId('wrapper')).toBeInTheDocument();
    expect(getByTestId('input-hidden')).not.toBeVisible();
    expect(getByTestId('svg')).toBeInTheDocument();
  });

  test('should check when click', () => {
    const { getByTestId } = render(<ToggleSwitch />);
    expect(getByTestId('input-hidden')).not.toBeChecked();
    fireEvent.click(getByTestId('wrapper'));
    expect(getByTestId('input-hidden')).toBeChecked();
  });

  test('should display label text', () => {
    const { queryByTestId, rerender } = render(<ToggleSwitch />);
    expect(queryByTestId('label')).not.toBeInTheDocument();
    rerender(<ToggleSwitch label="Check me!" />);
    expect(queryByTestId('label')).toBeInTheDocument();
  });
});
