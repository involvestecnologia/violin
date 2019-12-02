import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Icon } from './Icon';
import { theme } from '../../theme';

afterEach(cleanup);

describe('Icon', () => {
  test('should render correctly', () => {
    const { getByTestId } = render(<Icon data-testid="icon" icon="favorite" />);
    expect(getByTestId('icon')).toBeInTheDocument();
  });

  test('should render icon correctly', () => {
    const { getByTestId } = render(<Icon data-testid="icon" icon="favorite" />);
    expect(getByTestId('icon')).toHaveTextContent('favorite');
  });

  test('should have color style correctly', () => {
    const { getByTestId, rerender } = render(<Icon data-testid="icon" icon="favorite" />);
    expect(getByTestId('icon')).toHaveStyle(`
      color: inherit;
    `);
    rerender(<Icon data-testid="icon" color="default" icon="favorite" />);
    expect(getByTestId('icon')).toHaveStyle(`
      color: ${theme.palette.default.regular};
    `);
    rerender(<Icon data-testid="icon" color="primary" icon="favorite" />);
    expect(getByTestId('icon')).toHaveStyle(`
      color: ${theme.palette.primary.regular};
    `);
    rerender(<Icon data-testid="icon" color="accent" icon="favorite" />);
    expect(getByTestId('icon')).toHaveStyle(`
      color: ${theme.palette.accent.regular};
    `);
    rerender(<Icon data-testid="icon" color="done" icon="favorite" />);
    expect(getByTestId('icon')).toHaveStyle(`
      color: ${theme.palette.done.regular};
    `);
    rerender(<Icon data-testid="icon" color="error" icon="favorite" />);
    expect(getByTestId('icon')).toHaveStyle(`
      color: ${theme.palette.error.regular};
    `);
    rerender(<Icon data-testid="icon" color="alert" icon="favorite" />);
    expect(getByTestId('icon')).toHaveStyle(`
      color: ${theme.palette.alert.regular};
    `);
    rerender(<Icon data-testid="icon" color="progress" icon="favorite" />);
    expect(getByTestId('icon')).toHaveStyle(`
      color: ${theme.palette.progress.regular};
    `);
  });

  test('should size style correctly', () => {
    const { getByTestId } = render(<Icon data-testid="icon" size={32} icon="favorite" />);
    expect(getByTestId('icon')).toHaveStyle(`
      font-size: 2rem;
    `);
  });
});
