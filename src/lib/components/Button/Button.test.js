import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Button } from './Button';
import { theme } from '../../theme';

afterEach(cleanup);
const contentButton = 'Lorem ipsum';

describe('Button', () => {
  test('should render correctly', () => {
    const { getByText } = render(<Button>{contentButton}</Button>);
    expect(getByText(contentButton)).toBeInTheDocument();
  });

  test('should render icon element', () => {
    const { getByText } = render(<Button icon="games">{contentButton}</Button>);
    const iconContent = getByText('games');
    expect(iconContent).toBeVisible();
  });

  test('should have color style correctly', () => {
    const { getByText, rerender } = render(<Button>{contentButton}</Button>);
    expect(getByText(contentButton)).toHaveStyle(`
      background-color: ${theme.palette.default.regular};
    `);

    rerender(<Button color="primary">{contentButton}</Button>);
    expect(getByText(contentButton)).toHaveStyle(`
      background-color: ${theme.palette.primary.regular};
    `);

    rerender(<Button color="done">{contentButton}</Button>);
    expect(getByText(contentButton)).toHaveStyle(`
      background-color: ${theme.palette.done.regular};
    `);

    rerender(<Button color="error">{contentButton}</Button>);
    expect(getByText(contentButton)).toHaveStyle(`
      background-color: ${theme.palette.error.regular};
    `);

    rerender(<Button color="alert">{contentButton}</Button>);
    expect(getByText(contentButton)).toHaveStyle(`
      background-color: ${theme.palette.alert.regular};
    `);

    rerender(<Button color="progress">{contentButton}</Button>);
    expect(getByText(contentButton)).toHaveStyle(`
      background-color: ${theme.palette.progress.regular};
    `);
  });

  test('should have block style', () => {
    const { getByText, rerender } = render(<Button>{contentButton}</Button>);
    expect(getByText(contentButton)).toHaveStyle(`
      width: auto;
    `);

    rerender(<Button block>{contentButton}</Button>);
    expect(getByText(contentButton)).toHaveStyle(`
      width: 100%;
    `);
  });

  test('should have size style correctly', () => {
    const { getByText, rerender } = render(<Button>{contentButton}</Button>);
    expect(getByText(contentButton)).toHaveStyle(`
      height: 40px;
    `);

    rerender(<Button size="large">{contentButton}</Button>);
    expect(getByText(contentButton)).toHaveStyle(`
      height: 60px;
    `);

    rerender(<Button size="small">{contentButton}</Button>);
    expect(getByText(contentButton)).toHaveStyle(`
      height: 32px;
    `);
  });

  test('should have outline style', () => {
    const { getByText } = render(<Button outline>{contentButton}</Button>);
    expect(getByText(contentButton)).toHaveStyle(`
      background-color: transparent;
    `);
  });
});
