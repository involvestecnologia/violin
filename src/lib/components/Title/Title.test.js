import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Title } from './Title';
import { theme } from '../../theme';

afterEach(cleanup);

describe('Title', () => {
  test('should render correctly', () => {
    const { getByText } = render(<Title>Lorem ipsum</Title>);
    expect(getByText('Lorem ipsum')).toBeInTheDocument();
  });

  test('should have style size correctly', () => {
    const { getByText, rerender } = render(<Title size="h1">Title</Title>);
    expect(getByText('Title')).toHaveStyle(`
      font-size: ${theme.typography.fontSize.h1};
    `);

    rerender(<Title size="h2">Lorem ipsum</Title>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      font-size: ${theme.typography.fontSize.h2};
    `);

    rerender(<Title size="h3">Lorem ipsum</Title>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      font-size: ${theme.typography.fontSize.h3};
    `);

    rerender(<Title size="h4">Lorem ipsum</Title>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      font-size: ${theme.typography.fontSize.h4};
    `);

    rerender(<Title size="h5">Lorem ipsum</Title>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      font-size: ${theme.typography.fontSize.h5};
    `);

    rerender(<Title size="h6">Lorem ipsum</Title>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      font-size: ${theme.typography.fontSize.h6};
    `);
  });
});
