import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Subheading } from './Subheading';
import { theme } from '../../theme';

afterEach(cleanup);

describe('Subheading', () => {
  test('should render correctly', () => {
    const { getByText } = render(<Subheading>Subheading</Subheading>);
    expect(getByText('Subheading')).toBeInTheDocument();
  });

  test('should have style size correctly', () => {
    const { getByText, rerender } = render(<Subheading>Subheading</Subheading>);
    expect(getByText('Subheading')).toHaveStyle(`
      font-size: ${theme.typography.fontSize.large};
    `);

    rerender(<Subheading small>Subheading</Subheading>);
    expect(getByText('Subheading')).toHaveStyle(`
      font-size: ${theme.typography.fontSize.body};
    `);

    rerender(<Subheading overline>Subheading</Subheading>);
    expect(getByText('Subheading')).toHaveStyle(`
      font-size: ${theme.typography.fontSize.xsmall};
    `);
  });
});
