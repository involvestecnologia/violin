import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { ToggleButton } from './ToggleButton';

afterEach(cleanup);

describe('ToggleButton', () => {
  test('should render correctly', () => {
    const { getByTestId } = render(<ToggleButton name="option">Option 1</ToggleButton>);
    expect(getByTestId('wrapper')).toBeInTheDocument();
    expect(getByTestId('hidden-input')).toBeInTheDocument();
    expect(getByTestId('styled-button')).toBeInTheDocument();
  });

  test('should be hidden input', () => {
    const { getByTestId } = render(<ToggleButton name="option">Option 1</ToggleButton>);
    expect(getByTestId('hidden-input')).not.toBeVisible();
  });

  test('should check hidden input when clicked', () => {
    const { getByTestId } = render(<ToggleButton name="option">Option 1</ToggleButton>);
    expect(getByTestId('hidden-input')).not.toBeChecked();
    fireEvent.click(getByTestId('wrapper'));
    expect(getByTestId('hidden-input')).toBeChecked();
    fireEvent.click(getByTestId('wrapper'));
    expect(getByTestId('hidden-input')).toBeChecked();
  });

  test('should check and uncheck hidden input when clicked', () => {
    const { getByTestId } = render(<ToggleButton name="option" multiple>Option 1</ToggleButton>);
    expect(getByTestId('hidden-input')).not.toBeChecked();
    fireEvent.click(getByTestId('wrapper'));
    expect(getByTestId('hidden-input')).toBeChecked();
    fireEvent.click(getByTestId('wrapper'));
    expect(getByTestId('hidden-input')).not.toBeChecked();
  });
});
