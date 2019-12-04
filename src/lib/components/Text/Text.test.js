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

  test('shoud have size style correctly', () => {
    const { getByText, rerender } = render(<Text>Lorem ipsum</Text>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      font-size: ${theme.typography.fontSize.size2};
    `);
    rerender(<Text size="small">Lorem ipsum</Text>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      font-size: ${theme.typography.fontSize.size1};
    `);
    rerender(<Text size="lead">Lorem ipsum</Text>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      font-size: ${theme.typography.fontSize.size3};
    `);
  });

  test('should have color style correctly', () => {
    const { getByText, rerender } = render(<Text color="white">Lorem ipsum</Text>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      color: ${theme.palette.system.white};
    `);
    rerender(<Text color="default">Lorem ipsum</Text>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      color: ${theme.palette.default.regular};
    `);
    rerender(<Text color="primary">Lorem ipsum</Text>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      color: ${theme.palette.primary.regular};
    `);
    rerender(<Text color="accent">Lorem ipsum</Text>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      color: ${theme.palette.accent.regular};
    `);
    rerender(<Text color="error">Lorem ipsum</Text>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      color: ${theme.palette.error.regular};
    `);
    rerender(<Text color="alert">Lorem ipsum</Text>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      color: ${theme.palette.alert.regular};
    `);
    rerender(<Text color="done">Lorem ipsum</Text>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      color: ${theme.palette.done.regular};
    `);
    rerender(<Text color="progress">Lorem ipsum</Text>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      color: ${theme.palette.progress.regular};
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

  test('shoud have margin style', () => {
    const { getByText } = render(<Text margin>Lorem ipsum</Text>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      margin-bottom: ${theme.spacing.space3};
    `);
  });

  test('shoud have nowrap style', () => {
    const { getByText } = render(<Text nowrap>Lorem ipsum</Text>);
    expect(getByText('Lorem ipsum')).toHaveStyle(`
      white-space: nowrap;
    `);
  });
});
