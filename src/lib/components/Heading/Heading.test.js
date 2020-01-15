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

  test('should have style size correctly', () => {
    const { getByText, rerender } = render(<Heading size="h1">Heading</Heading>);
    expect(getByText('Heading')).toHaveStyle(`
      font-size: ${theme.typography.fontSize.h1};
    `);

    rerender(<Heading size="h2">Lorem ipsum</Heading>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      font-size: ${theme.typography.fontSize.h2};
    `);

    rerender(<Heading size="h3">Lorem ipsum</Heading>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      font-size: ${theme.typography.fontSize.h3};
    `);

    rerender(<Heading size="h4">Lorem ipsum</Heading>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      font-size: ${theme.typography.fontSize.h4};
    `);

    rerender(<Heading size="h5">Lorem ipsum</Heading>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      font-size: ${theme.typography.fontSize.h5};
    `);

    rerender(<Heading size="h6">Lorem ipsum</Heading>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      font-size: ${theme.typography.fontSize.h6};
    `);
  });
});
