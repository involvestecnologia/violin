import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Subtitle } from './Subtitle';
import { theme } from '../../theme';

afterEach(cleanup);

describe('Subtitle', () => {
  test('should render correctly', () => {
    const { getByText } = render(<Subtitle>Subtitle</Subtitle>);
    expect(getByText('Subtitle')).toBeInTheDocument();
  });

  test('should have style size correctly', () => {
    const { getByText, rerender } = render(<Subtitle>Subtitle</Subtitle>);
    expect(getByText('Subtitle')).toHaveStyle(`
      font-size: ${theme.typography.fontSize.large};
    `);

    rerender(<Subtitle small>Subtitle</Subtitle>);
    expect(getByText('Subtitle')).toHaveStyle(`
      font-size: ${theme.typography.fontSize.body};
    `);

    rerender(<Subtitle overline>Subtitle</Subtitle>);
    expect(getByText('Subtitle')).toHaveStyle(`
      font-size: ${theme.typography.fontSize.xsmall};
    `);
  });
});
