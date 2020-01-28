import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { TextField } from './TextField';

afterEach(cleanup);

const placeholder = 'Lorem ipsum';

describe('TextField', () => {
  test('should render correctly', () => {
    const { getByPlaceholderText } = render(<TextField placeholder={placeholder} />);
    expect(getByPlaceholderText(placeholder)).toBeInTheDocument();
  })

  test('should have correctly type', () => {
    const { getByPlaceholderText, rerender } = render(<TextField type="number" placeholder={placeholder} />);
    expect(getByPlaceholderText(placeholder).type).toBe('number');

    rerender(<TextField type="email" placeholder={placeholder} />);
    expect(getByPlaceholderText(placeholder).type).toBe('email');
  })

  test('should render label', () => {
    const { getByText } = render(<TextField label="Label" />);
    expect(getByText('Label')).toBeInTheDocument();
  })

  test('should render label help', () => {
    const { getByText } = render(<TextField label="Label" helpLabel="required" />);
    expect(getByText('required')).toBeInTheDocument();
  })

  test('should render label help', () => {
    const { getByText } = render(<TextField label="Label" helpLabel="required" helpText="Help text" />);
    expect(getByText('Help text')).toBeInTheDocument();
  })

  test('should be disabled', () => {
    const { getByPlaceholderText } = render(<TextField placeholder={placeholder} disabled />);
    expect(getByPlaceholderText(placeholder)).toBeDisabled();
  })

  test('should have size style correctly', () => {
    const {
      getByPlaceholderText,
      rerender
    } = render(<TextField placeholder={placeholder} small />);
    expect(getByPlaceholderText(placeholder)).toHaveStyle(`
      height: 30px;
    `);

    rerender(<TextField placeholder={placeholder} large />);
    expect(getByPlaceholderText(placeholder)).toHaveStyle(`
      height: 52px;
    `);
  })

  test('should render info icon of tooltip', () => {
    const { getByTestId } = render(<TextField tooltip="Lorem ipsum" />);
    expect(getByTestId('trigger')).toBeInTheDocument();
  })
});
