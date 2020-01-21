import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Text } from './Text';
import { theme } from '../../theme';

afterEach(cleanup);

describe('Text', () => {
  test('should render correctly', () => {
    const { getByText } = render(<Text>Lorem ipsum</Text>);
    expect(getByText('Lorem ipsum')).toBeInTheDocument();
  });

  test('shoud have correctly style', () => {
    const { getByText, rerender } = render(<Text>Lorem ipsum</Text>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      font-size: ${theme.typography.fontSize.body};
    `);
    rerender(<Text small>Lorem ipsum</Text>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      font-size: ${theme.typography.fontSize.small};
    `);
    rerender(<Text caption>Lorem ipsum</Text>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      font-size: ${theme.typography.fontSize.small};
    `);
    rerender(<Text disabled>Lorem ipsum</Text>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      opacity: 0.25;
    `);
    rerender(<Text error>Lorem ipsum</Text>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      color: ${theme.palette.red[700]};
    `);
  });

  test('shoud have bold style', () => {
    const { getByText } = render(<Text bold>Lorem ipsum</Text>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      font-weight: ${theme.typography.fontWeight.bold};
    `);
  });

  test('shoud have italic style', () => {
    const { getByText } = render(<Text italic>Lorem ipsum</Text>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      font-style: italic;
    `);
  });
});
