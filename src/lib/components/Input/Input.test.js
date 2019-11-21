import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Input } from './Input';
import { theme } from '../../theme';

afterEach(cleanup);

describe('Input', () => {
  test('renders with placeholder', () => {
    const placeholder = "Lorem ipsum";
    const { getByPlaceholderText } = render(<Input placeholder={placeholder} />);
    const component = getByPlaceholderText(placeholder);
    expect(component).toBeInTheDocument();
  })

  test('renders error style when has error prop', () => {
    const placeholder = "Lorem ipsum";
    const { getByPlaceholderText } = render(<Input placeholder={placeholder} error />);
    const component = getByPlaceholderText(placeholder);
    expect(component).toHaveStyle(`
      background-color: ${theme.palette.error.white};
      box-shadow: inset ${theme.shadow.shadowBorder2} ${theme.palette.error.regular};
    `);
  })
});