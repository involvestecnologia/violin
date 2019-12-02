import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Heading } from './Heading';
import { theme } from '../../theme';

afterEach(cleanup);

describe('Heading', () => {
  test('should render correctly', () => {
    const { getByText } = render(<Heading>Lorem ipsum</Heading>);
    expect(getByText('Lorem ipsum')).toBeInTheDocument();
  });

  test('should have style type correctly', () => {
    const { getByText, rerender } = render(<Heading>Lorem ipsum</Heading>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      font-size: ${theme.typography.fontSize.size5};
      font-weight: ${theme.typography.fontWeight.bold};
      color: ${theme.palette.system.dark};
    `);
    rerender(<Heading type="sub">Lorem ipsum</Heading>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      font-size: ${theme.typography.fontSize.size3};
      font-weight: ${theme.typography.fontWeight.semiBold};
      color: ${theme.palette.default.dark};
    `);
    rerender(<Heading type="section">Lorem ipsum</Heading>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      font-size: ${theme.typography.fontSize.size2};
      font-weight: ${theme.typography.fontWeight.bold};
      color: ${theme.palette.system.dark};
    `);
  });

  test('should have margin style correctly', () => {
    const { getByText, rerender } = render(<Heading>Lorem ipsum</Heading>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      margin: 0 0 ${theme.spacing.space3};
    `);
    rerender(<Heading noMargin>Lorem ipsum</Heading>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      margin: 0 0 0;
    `);
  });
});
